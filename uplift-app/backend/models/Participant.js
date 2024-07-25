const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  race: String,
  primaryLanguage: String,
  livingLocation: String,
  workingLocation: String,
  housingStatus: String,
  educationLevel: String,
  healthInsurance: Boolean,
  dentalInsurance: Boolean,
  visionInsurance: Boolean,
  workingBefore: Boolean,
  workType: String,
  certificates: Boolean,
  certificatesNote: String,
  militaryVeteran: Boolean,
  tempWorkNumber: String,
  orientationStatus: Boolean,
  trainingStatus: Boolean,
  placementStatus: Boolean,
  placementNote: String,
  returnedToUplift: Boolean,
  renewalHire: Boolean,
  benefitsReceived: [String],
  jobPlacements: [{
    jobPlacementNameCode: String,
    employerCode: String,
    jobTitle: String,
    startDate: Date,
    endDate: Date,
    tempOrPermanent: String
  }]
});

module.exports = mongoose.model('Participant', participantSchema);
