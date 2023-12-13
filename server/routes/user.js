// routes/user.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const recipeController = require('../controllers/recipe');

router.use(authMiddleware);

// User authentication routes
router.post('/recipes/save', recipeController.saveRecipe);
router.delete('/recipes/:id', recipeController.deleteRecipe);

module.exports = router;
