// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const app = express();
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipe');
const db = require("./config/connection")



app.use(bodyParser.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});


// const Recipe = db.Recipe;
// const User = db.User;


app.use('/auth', authRoutes);
app.use('/recipe', recipeRoutes);
// app.use('/protected', protectedRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")))

// Root route handler
app.get('/', (req, res) => {
  //res.send('Recipe Searching App!');
  res.sendFile(path.join(__dirname, "../client/index.html"))
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
