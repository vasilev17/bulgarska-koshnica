const BaseException = require("./baseException");

class InvalidRefreshTokenException extends BaseException {
  constructor() {
    super(400, "Invalid Refresh Token");
  }
}

module.exports = InvalidRefreshTokenException;
