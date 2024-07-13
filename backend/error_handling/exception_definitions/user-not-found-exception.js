const BaseException = require("./baseException");

class UserNotFoundException extends BaseException {
  constructor() {
    super(410, "User not found");
  }
}

module.exports = UserNotFoundException;
