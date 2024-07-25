const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

router.post('/participants', participantController.addParticipant);
router.put('/participants/:id', participantController.updateParticipant);

module.exports = router;
