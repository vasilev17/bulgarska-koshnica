const BaseException = require("./baseException");

//TODO inherit NOT FOUND EXCEPTION
class UserNotFoundException extends BaseException {
  constructor() {
    super(404, "User not found");
  }
}

module.exports = UserNotFoundException;
