// backend/routes/employerRoutes.js
const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController');

router.post('/employers', employerController.addEmployer);
router.put('/employers/:id', employerController.updateEmployer);
router.get('/employers', employerController.getEmployers);
router.get('/employers/:id', employerController.getEmployerById);
router.delete('/employers/:id', employerController.deleteEmployer);

module.exports = router;
