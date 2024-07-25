const Participant = require('../models/Participant');

exports.addParticipant = async (req, res) => {
  const { body } = req;
  body.tempWorkNumber = generateTempWorkNumber();
  const newParticipant = new Participant(body);
  try {
    const savedParticipant = await newParticipant.save();
    res.status(201).json(savedParticipant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateParticipant = async (req, res) => {
  try {
    const updatedParticipant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedParticipant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Helper function to generate temporary work number
function generateTempWorkNumber() {
  return 'TEMP-' + Math.floor(1000000 + Math.random() * 9000000).toString();
}
