var mongoose = require('mongoose');
// var Figure = require('figures/figureModel.js');

var DanceSchema = new mongoose.Schema({
  name: String,
  description: String,
  figures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Figure'}]
});

module.exports = mongoose.model('Dance', DanceSchema);

