const express = require('express');

const router = express.Router();

const authController = require('../Controllers/userController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.loginUser);

module.exports = router;