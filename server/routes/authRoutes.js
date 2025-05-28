const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User registration route
router.post('/register', authController.register);

// User login route
router.post('/login', authController.login);

// Password reset route
router.post('/reset-password', authController.resetPassword);

// Two-factor authentication route
router.post('/two-factor-auth', authController.twoFactorAuth);

module.exports = router;