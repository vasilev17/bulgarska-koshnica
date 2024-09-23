const NotFoundException = require("../not_found_exceptions/not-found-exception");

class ReviewNotFoundException extends NotFoundException {
  constructor() {
    super("Review not found");
  }
}

module.exports = ReviewNotFoundException;
