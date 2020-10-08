const express = require('express');
const router = express.Router();
const controller = require('../controllers/marsController')

router.post('/', controller.callRobot);
router.post('/:instructions', controller.callRobot);

module.exports = router;