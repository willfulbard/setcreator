//github.com/naomiajacobs/reactBoilerplate

var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "setcreator"
mongoose.connect('mongodb://localhost/setcreator');
var db = mongoose.connection;
db.on('error', function (error) {
  console.error('connection error:', error.message);
});
db.once('open', function() {
  console.log('connected to db');
});

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;
