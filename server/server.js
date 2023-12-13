// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipe');
const db = require("./config/connection");
const externalApiRoutes = require('./routes/externalApi');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(bodyParser.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});





app.use('/auth', authRoutes);
app.use('/recipe', recipeRoutes);
app.use('/api', externalApiRoutes);


app.use(express.static(path.join(__dirname, "../client/dist")))

// Root route handler
app.get('/', (req, res) => {
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

const PORT = process.env.PORT || 3006;

db.once('open', () => {
  app.listen(PORT, () => console.log(`Server is listening port ${PORT}`))
})
