// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const app = express();
const envPath = path.resolve(__dirname, '../.env');


require('dotenv').config({ path: envPath });


// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

app.use(express.json()); // Parse JSON bodies
app.use(cors());

// API routes
// const authRoutes = require('./routes/auth');
// const recipeRoutes = require('./routes/recipe');

// app.use('/auth', authRoutes);
// app.use('/recipe', recipeRoutes);

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
