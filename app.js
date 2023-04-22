require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { PORT, DB_ADDRESS } = require('./config');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const corsHandler = require('./middlewares/corsHandler');
const limiter = require('./middlewares/rateLimit');

const app = express();

mongoose.connect(DB_ADDRESS);

app.use(express.json());
app.use(helmet());
app.use(corsHandler);
app.use(requestLogger);
app.use(limiter);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);