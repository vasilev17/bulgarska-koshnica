const IncorrectCredentialsException = require("./exception_definitions/incorrect-credentials-exception");
const UnauthenticatedException = require("./exception_definitions/unauthenticated-exception");
const InvalidRefreshTokenException = require("./exception_definitions/invalid-refresh-token-exception");
const InvalidAccessTokenException = require("./exception_definitions/invalid-access-token-exception");
const AccessDeniedException = require("./exception_definitions/access-denied-exception");
const UserNotFoundException = require("./exception_definitions/user-not-found-exception");

module.exports = {
  IncorrectCredentialsException,
  UnauthenticatedException,
  InvalidRefreshTokenException,
  InvalidAccessTokenException,
  AccessDeniedException,
  UserNotFoundException,
};
