const jwt = require("jsonwebtoken");

const storage = require("../utils/storage.js");

const {
  IncorrectCredentialsException,
  UnauthenticatedException,
  InvalidAccessTokenException,
  AccessDeniedException,
  InvalidParamsException,
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

// Verify that the token [user_id] is the same as the url request [user_id]
const verifyUserId = (req, res, next) => {
  // Check if it's a valid number, compatible with database types
  if (
    isNaN(parseInt(req.params.userId)) ||
    req.params.userId < 1 ||
    req.params.userId > 2147483646
  ) {
    // User is providing invalid ID
    throw new InvalidParamsException();
  }

  // Check if user is asking for his own data
  if (req.tokenPayload.id == req.params.userId) {
    next();
  } else {
    // User is asking for data, that does not belong to him
    throw new AccessDeniedException();
  }
};

// // Verify if a user_id in a body corresponds to uid in token
// const verifyUserBusinessOwnership = (req, res, next) => {
//   // Check if user is trying to access business, accessable by him
//   if (parseInt(req.tokenPayload.id) !== parseInt(req.body.user_id)) {
//     throw new AccessDeniedException();
//   }

//   next();
// };

// Verify that the location ID from URL is in valid format
const verifyLocationId = (req, res, next) => {
  // Check if it's a valid number, compatible with database types
  if (
    isNaN(parseInt(req.params.locationId)) ||
    req.params.locationId < 1 ||
    req.params.locationId > 2147483646
  ) {
    // User is providing invalid ID
    throw new InvalidParamsException();
  }

  next();
};

// Verify that the review ID from URL is in valid format
const verifyReviewId = (req, res, next) => {
  // Check if it's a valid number, compatible with database types
  if (
    isNaN(parseInt(req.params.reviewId)) ||
    req.params.reviewId < 1 ||
    req.params.reviewId > 2147483646
  ) {
    // User is providing invalid ID
    throw new InvalidParamsException();
  }

  next();
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
  verifyUserId,
  validateUser,
  generateAccessToken,
  generateRefreshToken,
  verifyLocationId,
  verifyReviewId,
  // verifyUserBusinessOwnership,
};
