const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;

router.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${spoonacularApiKey}&number=15&query=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching recipe data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
