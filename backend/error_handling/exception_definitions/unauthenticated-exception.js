const BaseException = require("./baseException");

class UnauthenticatedException extends BaseException {
  constructor() {
    super(401, "Unauthenticated");
  }
}

module.exports = UnauthenticatedException;
