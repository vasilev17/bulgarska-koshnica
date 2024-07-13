const jwt = require("jsonwebtoken");

const security = require("../utils/security");
const storage = require("../utils/storage");

const {
  IncorrectCredentialsException,
  UnauthenticatedException,
  InvalidRefreshTokenException,
  UserNotFoundException,
} = require("../error_handling/exceptions");

const register = (req, res) => {
  // WARNING
  // userType is not implemented in DB neither in backend and so is omitted
  // in THIS function. It can be implemented at later stage.
  const { name, userType, email, password, phone_number } = req.body;

  const user = {
    user_id: -1,
    name: name,
    email: email,
    password: password,
    phone_number: phone_number,
  };

  return res.status(200).json(user);
};

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
      throw err; // Rethrow exception
    }
  }

  // Generate JWT including user_id
  const accessToken = security.generateAccessToken(user.user_id);
  const refreshToken = security.generateRefreshToken(user.user_id);

  // Add refreshToken to database
  await storage.addRefreshToken(user.user_id, refreshToken);

  // Respond with email, name and token
  res.status(200).json({
    email: user.email,
    name: user.name,
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
