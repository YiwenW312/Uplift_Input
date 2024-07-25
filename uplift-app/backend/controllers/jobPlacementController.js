// backend/controllers/jobPlacementNameController.js
const JobPlacementName = require('../models/JobPlacementName');

exports.addJobPlacementName = async (req, res) => {
  const newJobPlacementName = new JobPlacementName(req.body);
  try {
    const savedJobPlacementName = await newJobPlacementName.save();
    res.status(201).json(savedJobPlacementName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateJobPlacementName = async (req, res) => {
  try {
    const updatedJobPlacementName = await JobPlacementName.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJobPlacementName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getJobPlacementNames = async (req, res) => {
  try {
    const jobPlacementNames = await JobPlacementName.find();
    res.json(jobPlacementNames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getJobPlacementNameById = async (req, res) => {
  try {
    const jobPlacementName = await JobPlacementName.findById(req.params.id);
    if (!jobPlacementName) {
      return res.status(404).json({ message: "Job Placement Name not found" });
    }
    res.json(jobPlacementName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteJobPlacementName = async (req, res) => {
  try {
    await JobPlacementName.findByIdAndDelete(req.params.id);
    res.json({ message: "Job Placement Name deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
