const express = require('express');
const router = express.Router();
const autoShipController = require('../controller/autoShipController')
const stampWalletController = require('../controller/stampWalletController')
/* GET users listing. */
router.get('/getAutoShip', autoShipController.autoShip);
router.get('/stampWallet', stampWalletController.fnc_calc_stamp_wallet);

module.exports = router;