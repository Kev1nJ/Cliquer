// routes/protected.js
const express = require('express');
const router = express.Router();
const protectedController = require('../controllers/protected');
const authMiddleware = require('../middleware/auth');

// GET /protected/data
router.get('/data', authMiddleware, protectedController.getProtectedData);

module.exports = router;
