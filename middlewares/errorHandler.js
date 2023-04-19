const { STATUS_INTERNAL_SERVER_ERROR } = require('../errors/statuses');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || STATUS_INTERNAL_SERVER_ERROR;
  const message = statusCode === STATUS_INTERNAL_SERVER_ERROR
    ? `internal Error: ${err.message}`
    : err.message;
  res.status(statusCode).send({ message });

  next();
};

module.exports = errorHandler;