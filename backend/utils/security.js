const jwt = require("jsonwebtoken");

const storage = require("../utils/storage.js");

const {
  IncorrectCredentialsException,
  UnauthenticatedException,
  InvalidAccessTokenException,
} = require("../error_handling/exceptions.js");

const dotenv = require("dotenv");
dotenv.config();

// Verify user's token
const verifyJWT = (req, res, next) => {
  // Get authorization field
  const authField = req.headers.authorization;

  if (authField) {
    // If auth is present
    // Parse token
    const token = authField.split(" ")[1];

    // Verify token
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY, (err, tokenPayload) => {
      if (err) {
        throw new InvalidAccessTokenException();
      }

      req.tokenPayload = tokenPayload; // Must pass user to next function?
      next();
    });
  } else {
    // If auth is not present
    throw new UnauthenticatedException();
  }
};

async function validateUser(email, password) {
  // Find user. If not found an exception is thrown
  const user = await storage.findUserByEmail(email);
  // TODO Add option to find user by phone_number

  // Check if password exists
  if (
    // TODO Changes will be made when hash passwords are introduced
    (await new Blob([user.password], { type: "text" }).text()).replace(
      /\0/g,
      ""
    ) === password
  ) {
    // Correct password
    return user;
  } else {
    // Incorrect password
    throw new IncorrectCredentialsException();
  }
}

const generateAccessToken = (uid) => {
  return jwt.sign({ id: uid }, process.env.JWT_ACCESS_TOKEN_KEY, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (uid) => {
  return jwt.sign({ id: uid }, process.env.JWT_ACCESS_REFRESH_TOKEN_KEY, {
    // expiresIn: "15s",
  });
};

module.exports = {
  verifyJWT,
  validateUser,
  generateAccessToken,
  generateRefreshToken,
};
