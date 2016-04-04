var mongoose = require('mongoose');

var FigureSchema = new mongoose.Schema({
  _dance: { type: mongoose.Schema.Types.ObjectId, ref: 'Dance' },
  name: String,
  description: String,
  sortBy: Number,
  type: String,
  barcount: Number
});

module.exports = mongoose.model('Figure', FigureSchema);

