const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Movie {PATH} required'],
  },
  director: {
    type: String,
    required: [true, 'Movie {PATH} required'],
  },
  duration: {
    type: Number,
    required: [true, 'Movie {PATH} required'],
  },
  year: {
    type: String,
    required: [true, 'Movie {PATH} required'],
  },
  description: {
    type: String,
    required: [true, 'Movie {PATH} required'],
  },
  image: {
    type: String,
    required: [true, 'Movie {PATH} required'],
    validate: {
      validator: (v) => isURL(v),
      message: 'image is not valid',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Movie {PATH} required'],
    validate: {
      validator: (v) => isURL(v),
      message: 'trailerLink is not valid',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Movie {PATH} required'],
    validate: {
      validator: (v) => isURL(v),
      message: 'thumbnail is not valid',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Movie {PATH} required'],
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: [true, 'Movie {PATH} required'],
  },
  nameRU: {
    type: String,
    required: [true, 'Movie {PATH} required'],
  },
  nameEN: {
    type: String,
    required: [true, 'Movie {PATH} required'],
  },
});

module.exports = mongoose.model('movie', movieSchema);