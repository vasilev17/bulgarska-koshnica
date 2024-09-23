const BaseException = require("./baseException");

class RequestLimitException extends BaseException {
  constructor() {
    super(422, "Too many requests");
  }
}

module.exports = RequestLimitException;
