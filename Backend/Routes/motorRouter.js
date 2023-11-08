// routes/motorRoutes.js

const express = require('express');
const router = express.Router();
const motorController = require('../Controllers/motorController');

router.post('/buy', motorController.buyMotor);
router.post('/sell', motorController.sellMotor);
router.get('/getAllBuys', motorController.getBuyMotors);
router.get('/getAllSells', motorController.getSellMotors);
router.post('/addMotor', motorController.createMotor);
router.get('/getMotor/:id', motorController.getMotor);
router.get('/getAllMotors', motorController.getAllMotors);
router.put('/updateMotor', motorController.updateMotor);
router.delete('/deleteMotor', motorController.deleteMotor);


module.exports = router;
