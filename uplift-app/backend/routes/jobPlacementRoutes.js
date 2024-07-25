const express = require('express');
const router = express.Router();
const jobPlacementNameController = require('../controllers/jobPlacementNameController');

router.post('/jobPlacementNames', jobPlacementNameController.addJobPlacementName);
router.put('/jobPlacementNames/:id', jobPlacementNameController.updateJobPlacementName);
router.get('/jobPlacementNames', jobPlacementNameController.getJobPlacementNames);
router.get('/jobPlacementNames/:id', jobPlacementNameController.getJobPlacementNameById);
router.delete('/jobPlacementNames/:id', jobPlacementNameController.deleteJobPlacementName);

module.exports = router;
