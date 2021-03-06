var Promise = require('bluebird');
var Dance = require('./danceModel.js');

var findAllDances = Promise.promisify(Dance.find.bind(Dance));
var findDance = Promise.promisify(Dance.findOne.bind(Dance));

module.exports = {
  allDances: function (req, res, next) {
    findAllDances({}).then(function (dances) {
      res.json(dances.sort(function(a, b) {
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
      }));
    }).catch(function(err) {
      console.log('Error allDances in danceController.js: ', err.message);
      next();
    });
  }
};
