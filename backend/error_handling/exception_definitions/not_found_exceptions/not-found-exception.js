const BaseException = require("../baseException");

class LocationNotFoundException extends BaseException {
  constructor(message) {
    super(404, message !== undefined ? message : "Not found");
  }
}

module.exports = LocationNotFoundException;
