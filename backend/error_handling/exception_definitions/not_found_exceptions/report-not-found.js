const NotFoundException = require("../not_found_exceptions/not-found-exception");

class ReportNotFoundException extends NotFoundException {
  constructor() {
    super("Report not found");
  }
}

module.exports = ReportNotFoundException;
