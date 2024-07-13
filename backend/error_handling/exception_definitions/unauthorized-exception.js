const BaseException = require("./baseException");

class UnauthorizedException extends BaseException {
  constructor() {
    super(403, "Unauthorized");
  }
}

module.exports = UnauthorizedException;
