// Include middleware for routes here
var danceController = require('../models/dances/danceController.js');

module.exports = function (app, express) {
  // Setup routes to api stuff here:
  app.get('/api/dances/', danceController.allDances);

};
