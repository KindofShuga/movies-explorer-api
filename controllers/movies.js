const Movie = require('../models/movie');
const ResourceNotFound = require('../errors/ResourceNotFound');
const Forbidden = require('../errors/Forbidden');
const BadRequest = require('../errors/BadRequest');
const { STATUS_OK, STATUS_CREATED } = require('../errors/statuses');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.status(STATUS_OK).send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const data = req.body;
  const ownerId = req.user._id;
  Movie.create({ ...data, owner: ownerId })
    .then((user) => res.status(STATUS_CREATED).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest());
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new ResourceNotFound();
    })
    .then((movie) => {
      if (movie.owner.toString() === req.user._id) {
        Movie.deleteOne(movie)
          .then(() => res.status(STATUS_OK).send({ data: movie }))
          .catch(next);
      } else {
        throw new Forbidden();
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest());
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};