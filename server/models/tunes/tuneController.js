var Promise = require('bluebird');
var Tune = require('./tuneModel.js');

var findAllTunes = Promise.promisify(Tune.find.bind(Tune));
var findTune = Promise.promisify(Tune.findOne.bind(Tune));

module.exports = {
  allTunes: function (req, res, next) {
    findAllTunes({}).then(function (dances) {
      res.json(dances);
    }).catch(function(err) {
      console.log('Error allTunes in tuneController.js: ', err.message);
      next();
    });
  }
};
