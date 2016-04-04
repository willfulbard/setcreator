// Include middleware for routes here
var danceController = require('../models/dances/danceController.js');
var figureController = require('../models/figures/figureController.js');
var tuneController = require('../models/tunes/tuneController.js');

module.exports = function (app, express) {
  // Setup routes to api stuff here:
  app.get('/api/dances/', danceController.allDances);
  app.get('/api/figures/', figureController.allFigures);
  app.get('/api/tunes/', tuneController.allTunes);

};
