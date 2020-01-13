let createError = require('http-errors');
let express = require('express');
let expressValidator=require('express-validator');
let indexRouter = require('./routes/index');

let app = express();
app.use(expressValidator())
// view engine setup


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});
;



module.exports = app;
