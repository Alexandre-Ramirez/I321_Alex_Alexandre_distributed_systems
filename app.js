require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const pizzasRouter = require('./routes/pizzas');
const ingredientsRouter = require('./routes/ingredients');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pizzas', pizzasRouter);
app.use("/pizza", pizzasRouter);
app.use('/ingredients', ingredientsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    console.error(err); // utile pour debug

    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        error: req.app.get('env') === 'development' ? err : {}
    });
});


module.exports = app;
