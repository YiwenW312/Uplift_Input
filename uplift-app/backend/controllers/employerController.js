const Employer = require('../models/Employer');

exports.addEmployer = async (req, res) => {
  const newEmployer = new Employer(req.body);
  try {
    const savedEmployer = await newEmployer.save();
    res.status(201).json(savedEmployer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEmployer = async (req, res) => {
  try {
    const updatedEmployer = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.json(employers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }
    res.json(employer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEmployer = async (req, res) => {
  try {
    await Employer.findByIdAndDelete(req.params.id);
    res.json({ message: "Employer deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
