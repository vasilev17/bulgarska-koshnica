const BaseException = require("./baseException");

class InvalidParamsException extends BaseException {
  constructor() {
    super(400, "Invalid parameters");
  }
}

module.exports = InvalidParamsException;
