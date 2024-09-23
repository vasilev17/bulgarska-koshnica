const IncorrectCredentialsException = require("./exception_definitions/incorrect-credentials-exception");
const UnauthenticatedException = require("./exception_definitions/unauthenticated-exception");
const InvalidRefreshTokenException = require("./exception_definitions/invalid-refresh-token-exception");
const InvalidAccessTokenException = require("./exception_definitions/invalid-access-token-exception");
const AccessDeniedException = require("./exception_definitions/access-denied-exception");
const UserNotFoundException = require("./exception_definitions/not_found_exceptions/user-not-found-exception");
const UnsuccessfulInsertQueryException = require("./exception_definitions/unsuccessful-insert-query-exception");
const UserAlreadyExistsException = require("./exception_definitions/user-already-exists-exception");
const InvalidParamsException = require("./exception_definitions/invalid-params-request");
const LocationNotFoundException = require("./exception_definitions/not_found_exceptions/location-not-found-exception");
const NotFoundException = require("./exception_definitions/not_found_exceptions/not-found-exception");
const ReportNotFoundException = require("./exception_definitions/not_found_exceptions/report-not-found");
const ProductNotFoundException = require("./exception_definitions/not_found_exceptions/product-not-found-exception");
const ReviewNotFoundException = require("./exception_definitions/not_found_exceptions/review-not-found-exception");
const UnsuccessfulUpdateQueryException = require("./exception_definitions/unsuccessful-update-query-exception");
const RequestLimitException = require("./exception_definitions/request-limit-exception");

module.exports = {
  IncorrectCredentialsException,
  UnauthenticatedException,
  InvalidRefreshTokenException,
  InvalidAccessTokenException,
  AccessDeniedException,
  UserNotFoundException,
  ReportNotFoundException,
  ReviewNotFoundException,
  UnsuccessfulInsertQueryException,
  UserAlreadyExistsException,
  InvalidParamsException,
  LocationNotFoundException,
  NotFoundException,
  ProductNotFoundException,
  UnsuccessfulUpdateQueryException,
  RequestLimitException,
};
