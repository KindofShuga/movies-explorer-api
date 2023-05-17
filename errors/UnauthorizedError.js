const AplicationError = require('./AplicationError');
const { STATUS_UNAUTHORIZED } = require('./statuses');

class UnauthorizedError extends AplicationError {
  constructor() {
    super(STATUS_UNAUTHORIZED, 'Authorization required');
  }
}

module.exports = UnauthorizedError;