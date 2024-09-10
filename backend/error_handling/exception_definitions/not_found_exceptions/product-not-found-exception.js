const NotFoundException = require("../not_found_exceptions/not-found-exception");

class ProductNotFoundException extends NotFoundException {
  constructor() {
    super("Product not found");
  }
}

module.exports = ProductNotFoundException;