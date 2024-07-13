const BaseException = require("./baseException");

class UnsuccessfulInsertQueryException extends BaseException {
  constructor() {
    super(500, "Unsuccessful database insert statement");
  }
}

module.exports = UnsuccessfulInsertQueryException;
