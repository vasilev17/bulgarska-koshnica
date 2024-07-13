const BaseException = require("./baseException");

class InvalidRefreshTokenException extends BaseException {
  constructor() {
    super(403, "Invalid Refresh Token");
  }
}

module.exports = InvalidRefreshTokenException;
