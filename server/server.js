// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const app = express();
const db = require('./models/db')
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipe');
const protectedRoutes = require('./routes/protected');
const envPath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: envPath });



app.use(bodyParser.json());
app.use(cors());

const Recipe = db.Recipe;
const User = db.User;



app.use('/auth', authRoutes);
app.use('/recipe', recipeRoutes);
app.use('/protected', protectedRoutes);

// Root route handler
app.get('/', (req, res) => {
  res.send('Recipe Searching App!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
});

const port = process.env.PORT || 3006;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
