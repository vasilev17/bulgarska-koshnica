const NotFoundException = require("../not_found_exceptions/not-found-exception");

class UserNotFoundException extends NotFoundException {
  constructor() {
    super("User not found");
  }
}

module.exports = UserNotFoundException;
