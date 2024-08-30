const NotFoundException = require("../not_found_exceptions/not-found-exception");

class LocationNotFoundException extends NotFoundException {
  constructor() {
    super("Location not found");
  }
}

module.exports = LocationNotFoundException;
