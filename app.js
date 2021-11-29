var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database =  require("./config/Database");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require("./routes/Productos.router");
var usuariosRouter = require("./routes/Usuarios.router");
var loginRouter = require("./routes/login.router");
var auth = require("./auth/main_auth");
var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/login',loginRouter);

app.use(auth);
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/usuarios',usuariosRouter);
app.use('/productos',productosRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;

// Mongo connect
database.mongoConnect();

// router
app.use('/',indexRouter);
app.use('/users',usersRouter);
