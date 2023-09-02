const express = require('express');
const router = express.Router();
const weakStrongController = require('../controller/weakStrongController')
const newWeakStrongController = require('../controller/newWeakStrongController')
/* GET users listing. */
router.get('/getBalance', weakStrongController.getBalance);
router.get('/getNewBalance', newWeakStrongController.getBalance);

module.exports = router;