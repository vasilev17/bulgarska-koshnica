const jwt = require("jsonwebtoken");

const security = require("../utils/security");
const storage = require("../utils/storage");

const {
  IncorrectCredentialsException,
  UnauthenticatedException,
  InvalidRefreshTokenException,
  UserNotFoundException,
  UserAlreadyExistsException,
} = require("../error_handling/exceptions");

async function register(req, res) {
  // WARNING
  // userType is not implemented in DB neither in backend and so is omitted
  // in THIS function. It can be implemented at later stage.
  const { name, userType, email, password, phone_number } = req.body;

  const user = {
    name: name,
    email: email,
    password: password,
    phone_number: phone_number,
  };

  // Check if user already exists
  try {
    // By email
    await storage.findUserByEmail(user.email);

    // If no "Not found" exception occured until this point a user already exists, so exception is thrown
    throw new UserAlreadyExistsException();
  } catch (err) {
    if (err instanceof UserNotFoundException) {
      try {
        // If not found by email check by phone number
        await storage.findUserByPhoneNumber(user.phone_number);

        // If no "Not found" exception occured until this point a user already exists, so exception is thrown
        throw new UserAlreadyExistsException();
      } catch (err) {
        if (err instanceof UserNotFoundException) {
          try {
            // At this point user does not exists and user creation is allowed
            await storage.createUser(user);
          } catch (error) {
            if (err instanceof UnsuccessfulInsertQueryException) {
              throw new IncorrectCredentialsException(); // Hide UnsuccessfulInsertQueryException exception from client
            } else {
              throw err; // Rethrow unexpected exceptions
            }
          }
        } else if (err instanceof UserAlreadyExistsException) {
          // User is found by phone number
          throw new IncorrectCredentialsException(); // Hide UserAlreadyExistsException from client
        } else {
          throw err; // Rethrow unexpected exceptions
        }
      }
    } else if (err instanceof UserAlreadyExistsException) {
      // User is found by email
      throw new IncorrectCredentialsException(); // Hide UserAlreadyExistsException exception from client
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.sendStatus(200);
}

async function login(req, res) {
  // Get username and password from login attempt
  const { email, password } = req.body;

  // Check if they are valid
  let user = undefined;

  try {
    user = await security.validateUser(email, password);
  } catch (err) {
    if (err instanceof UserNotFoundException) {
      throw new IncorrectCredentialsException(); // Hide UserNotFound exception from client
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  // Generate JWT including user_id
  const accessToken = security.generateAccessToken(user.user_id);
  const refreshToken = security.generateRefreshToken(user.user_id);

  // Add refreshToken to database
  await storage.addRefreshToken(user.user_id, refreshToken);

  // Respond with email, name and token
  res.status(200).json({
    accessToken,
    refreshToken,
  });
}

async function logout(req, res) {
  // Get refresh token from request
  const refreshToken = req.body.refreshToken;

  // Remove old refresh token from database
  if (!(await storage.removeRefreshToken(refreshToken)))
    throw new UnauthenticatedException();

  res.status(200).json("You logged out successfully");
}

async function refresh(req, res) {
  // Get refresh token from request
  const oldRefreshToken = req.body.refreshToken;

  // Check if it is present
  if (!oldRefreshToken) throw new UnauthenticatedException();

  // Check if it is in the database
  await storage.findRefreshToken(oldRefreshToken);

  // Verify key
  jwt.verify(
    oldRefreshToken,
    process.env.JWT_ACCESS_REFRESH_TOKEN_KEY,
    async (err, tokenPayload) => {
      if (err) throw new InvalidRefreshTokenException();

      const newAccessToken = security.generateAccessToken(tokenPayload.id);
      const newRefreshToken = security.generateRefreshToken(tokenPayload.id);

      // Add new refresh token to database
      await storage.addRefreshToken(tokenPayload.id, newRefreshToken);

      // Respond with new tokens
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    }
  );
}

module.exports = { login, logout, refresh, register };
