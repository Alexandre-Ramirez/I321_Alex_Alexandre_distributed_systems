import "dotenv/config";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createHttpError from "http-errors";

import pizzasRoute from "./routes/pizzasRoute.js";
import pizzaOfTheMomentRoute from "./routes/pizzaOfTheMomentRoute.js";
import ingredientsRoute from "./routes/ingredientsRoute.js";

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/pizzas', pizzasRoute);
app.use('/pizzaOfTheMoment', pizzaOfTheMomentRoute);
app.use('/ingredients', ingredientsRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
});
