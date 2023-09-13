const express = require('express');
const router = express.Router();
const eAtoShipController = require('../controller/eAtoShipController')
const stampWalletController = require('../controller/stampWalletController')
/* GET users listing. */
router.get('/getAutoShip', eAtoShipController.eAuto);
router.get('/stampWallet', stampWalletController.fnc_calc_stamp_wallet);

module.exports = router;