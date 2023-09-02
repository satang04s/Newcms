const express = require('express');
const router = express.Router();
const fastBonusController = require('../controller/fastBonusController')
const newFastBonusController = require('../controller/newFastBonusController')
/* GET users listing. */
router.get('/getFastBonus', fastBonusController.getFastBonus);
router.get('/getNewFastBonus', newFastBonusController.calculateCommission);

module.exports = router;