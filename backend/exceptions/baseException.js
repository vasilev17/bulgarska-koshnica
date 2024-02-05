class BaseException extends Error {
  constructor(statusCode, message) {
    super();
    this._statusCode = statusCode !== undefined ? statusCode : 400;
    this._message = message !== undefined ? message : "Error";
  }

  get statusCode() {
    return this._statusCode;
  }

  set statusCode(statusCode) {
    this._statusCode = statusCode;
  }

  get message() {
    return this._message;
  }

  set message(message) {
    this._message = message;
  }
}

module.exports = BaseException;
