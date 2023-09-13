const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const fastRouter = require('./routes/fast');
const weakStrongRouter = require('./routes/weakStrong');
const autoShipRouter = require('./routes/autoShip')
const matchingRouter = require('./routes/matching')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fastBonus', fastRouter);
app.use('/weakStrong', weakStrongRouter);
app.use('/autoShip' , autoShipRouter)
app.use('/matching' , matchingRouter)

module.exports = app;
