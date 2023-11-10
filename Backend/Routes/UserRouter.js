const express = require('express');

const router = express.Router();

const authController = require('../Controllers/userController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.loginUser);
router.get('/users', authController.getAllUsers);

router.post("/forgot-password1", authController.forgotPassword1)

router.get("/password-reset/:id/:token", authController.getResetToken)

router.post("/password-reset/:id/:token", authController.resetPassword1)

module.exports = router;