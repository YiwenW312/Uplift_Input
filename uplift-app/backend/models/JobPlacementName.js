const mongoose = require('mongoose');

const jobPlacementNameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true }
});

module.exports = mongoose.model('JobPlacementName', jobPlacementNameSchema);
