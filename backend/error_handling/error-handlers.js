function globalErrorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 400;
  let errorMessage = err.message || "Error";

  return res.status(statusCode).json(errorMessage);
}

module.exports = { globalErrorHandler };
