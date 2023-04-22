const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'User {PATH} required'],
    unique: [true, 'User {PATH} already exists'],
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'email is not valid',
    },
  },
  password: {
    type: String,
    required: [true, 'User {PATH} required'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'User {PATH} required'],
    minlength: [2, 'Must be at least 2'],
    maxlength: [30, 'Must be max 30'],
  },
});

userSchema.statics.findUserByCredentials = function findOne(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError();
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError();
          }
          return user;
        });
    });
};

userSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.password;
    return ret;
  },
});

module.exports = mongoose.model('user', userSchema);