const router = require('express').Router();
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const ResourceNotFound = require('../errors/ResourceNotFound');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { createUserValidation, loginValidation } = require('../middlewares/validation');

router.post('/signup', createUserValidation, createUser);
router.post('/signin', loginValidation, login);
router.use(auth);
router.use('/users', usersRoutes);
router.use('/movies', moviesRoutes);
router.use('*', (req, res, next) => {
  next(new ResourceNotFound());
});

module.exports = router;