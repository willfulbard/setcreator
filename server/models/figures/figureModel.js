var mongoose = require('mongoose');

var FigureSchema = new mongoose.Schema({
  _dance : { type: Number, ref: 'Dance' },
  name: String,
  description: String
  sort: Number,
  type: String,
  barcount: Number
});

module.exports = mongoose.model('Figure', FigureSchema);

