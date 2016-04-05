var Promise = require('bluebird');
var Figure = require('./figureModel.js');

var findAllFigures = Promise.promisify(Figure.find.bind(Figure));
var findFigure = Promise.promisify(Figure.findOne.bind(Figure));

module.exports = {
  allFigures: function (req, res, next) {
    findAllFigures({}).then(function (figures) {
      res.json(figures.sort(function(a, b) {
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
      }));
    }).catch(function(err) {
      console.log('Error allFigures in danceController.js: ', err.message);
      next();
    });
  }
};
