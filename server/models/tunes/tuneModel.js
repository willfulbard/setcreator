var mongoose = require('mongoose');

var TuneSchema = new mongoose.Schema({
  name: String,
  sessionid: Number,
  type: String,
  barcount: Number
});

module.exports = mongoose.model('Tune', TuneSchema);

