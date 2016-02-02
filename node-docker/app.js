
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const health = require('./routes/health');
const docker = require('./routes/docker');

const app = express();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://'+ process.env.MONGO_HOST+'/testdocker';
MongoClient.connect(url, function(err, db) {
  if(err) {
    global.mongostatus = "error"
  } else {
    global.mongostatus = "Mongo connetion successful"
  }
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/health', health);
app.use('/docker', docker);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send();
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send();
});


console.log("hahaha")
console.log("hahaha")
console.log("hahha")


module.exports = app;
