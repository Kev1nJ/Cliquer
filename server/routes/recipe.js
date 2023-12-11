// routes/recipe.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');
const authMiddleware = require('../middleware/auth');

// POST /recipe/save
router.post('/save', authMiddleware, recipeController.saveRecipe);

module.exports = router;
