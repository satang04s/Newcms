const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
/* GET users listing. */
router.get('/getUser', userController.getUser);
router.get('/getBalance', userController.getBalance)

module.exports = router;
