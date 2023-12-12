const db = require('../config/connection');
const cleanDB = require('./cleanDB');
const { Recipe } = require('../models');

const recipeData = require('./recipeData.json');

db.once('open', async () => {
  await cleanDB('Recipe', 'recipes');

  await Recipe.insertMany(recipeData);

  console.log('Recipes seeded!');
  process.exit(0);
});
