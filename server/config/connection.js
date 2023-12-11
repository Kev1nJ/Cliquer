// Connect to the MongoDB database
const mongoose = require('mongoose');
require('dotenv').config();
//dotenv


console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request to ${req.url}`);
//   next();
// });

module.exports = mongoose.connection;
