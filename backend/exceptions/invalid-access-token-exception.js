const BaseException = require("./baseException");

class InvalidAccessTokenException extends BaseException {
  constructor() {
    super(403, "Invalid Access Token");
  }
}

module.exports = InvalidAccessTokenException;
