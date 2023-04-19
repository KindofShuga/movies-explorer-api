const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const ResourceNotFound = require('../errors/ResourceNotFound');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().min(2).max(30),
    password: Joi.string().required(),
  }),
}), createUser);
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);
router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);
router.use('*', (req, res, next) => {
  next(new ResourceNotFound());
});

module.exports = router;