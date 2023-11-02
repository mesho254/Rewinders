// routes/motorRoutes.js

const express = require('express');
const router = express.Router();
const motorController = require('../Controllers/motorController');

router.post('/buy', motorController.buyMotor);
router.post('/sell', motorController.sellMotor);
router.get('/getAllBuys', motorController.getBuyMotors);
router.get('/getAllSells', motorController.getSellMotors);


module.exports = router;
