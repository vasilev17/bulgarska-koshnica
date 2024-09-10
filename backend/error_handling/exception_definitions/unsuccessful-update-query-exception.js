const BaseException = require("./baseException");

class UnsuccessfulUpdateQueryException extends BaseException {
  constructor() {
    super(500, "Unsuccessful database update statement");
  }
}

module.exports = UnsuccessfulUpdateQueryException;
