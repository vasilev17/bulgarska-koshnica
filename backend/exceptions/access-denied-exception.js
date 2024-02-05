const BaseException = require("./baseException");

class AccessDeniedException extends BaseException {
  constructor() {
    super(403, "Access denied");
  }
}

module.exports = AccessDeniedException;
