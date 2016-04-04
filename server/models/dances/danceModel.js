var mongoose = require('mongoose');

var DanceSchema = new mongoose.Schema({
  name: String,
  description: String
  figures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Figure'}]
});

module.exports = mongoose.model('Dance', DanceSchema);

