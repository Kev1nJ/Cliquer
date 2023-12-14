const User = require('../models/User');
const Recipe = require('../models/Recipe');

// Save a recipe to user's profile
exports.saveRecipe = async (req, res) => {
  try {
    const userId = req.userId; 
    const { recipeId, recipeTitle, recipeDetails } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the recipe is already saved by the user
    const existingRecipe = user.savedRecipes.find((recipe) => recipe.recipeId === recipeId);

    if (existingRecipe) {
      return res.status(400).json({ message: 'Recipe already saved' });
    }

    // Save the new recipe to the user's profile
    user.savedRecipes.push({ recipeId, recipeTitle, recipeDetails });
    await user.save();

    res.status(201).json({ message: 'Recipe saved successfully' });
  } catch (error) {
    console.error('Error saving recipe:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a saved recipe from user's profile
exports.deleteRecipe = async (req, res) => {
  try {
    const userId = req.userId; // Assuming you have middleware to extract user ID from JWT
    const { recipeId } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the recipe is saved by the user
    const savedRecipeIndex = user.savedRecipes.findIndex((recipe) => recipe.recipeId === recipeId);

    if (savedRecipeIndex === -1) {
      return res.status(404).json({ message: 'Recipe not found in user\'s saved recipes' });
    }

    // Remove the recipe from the user's saved recipes
    user.savedRecipes.splice(savedRecipeIndex, 1);
    await user.save();

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
