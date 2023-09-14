const express = require('express');
const router = express.Router();
const openBillAmController = require('../controller/openBillAmController')
const stampWalletController = require('../controller/stampWalletController')
/* GET users listing. */
router.get('/openBillAm', openBillAmController.openBillAm);
router.get('/stampWallet', stampWalletController.fnc_calc_stamp_wallet);

module.exports = router;