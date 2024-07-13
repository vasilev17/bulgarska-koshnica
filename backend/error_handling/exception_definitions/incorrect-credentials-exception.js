const BaseException = require("./baseException");

class IncorrectCredentialsException extends BaseException {
  constructor() {
    super(401, "Incorrect Credentials");
  }
}

module.exports = IncorrectCredentialsException;
