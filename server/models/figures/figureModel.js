var mongoose = require('mongoose');

var FigureSchema = new mongoose.Schema({
  name: String,
  description: String
  sort: Number,
  type: String,
  barcount: Number
});

module.exports = mongoose.model('Figure', FigureSchema);

