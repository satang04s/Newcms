const express = require('express');
const router = express.Router();
const matchingController = require('../controller/matchingController')
/* GET users listing. */
router.get('/getMatching', matchingController.calMatching);

module.exports = router;