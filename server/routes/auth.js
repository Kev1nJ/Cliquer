// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// POST /auth/register
router.post('/register', authController.registerUser);

// POST /auth/login
router.post('/login', authController.loginUser);

module.exports = router;
