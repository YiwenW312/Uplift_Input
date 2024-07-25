const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  industry: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});

module.exports = mongoose.model('Employer', employerSchema);
