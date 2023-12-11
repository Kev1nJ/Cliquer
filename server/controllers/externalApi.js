// // controllers/externalApi.js
// const axios = require('axios');

// //  Fetch recipes from a third-party API
// exports.getRecipesFromExternalApi = async (req, res) => {
//   try {
//     // Make a request to the third-party API
//     const response = await axios.get('RECIPES API');

//     // Extract and send the relevant data to the client
//     const recipes = response.data;
//     res.status(200).json({ recipes });
//   } catch (error) {
//     console.error('Error fetching recipes from external API:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
