// Connect to the MongoDB database
require('dotenv').config();



console.log(process.env.MONGODB_URI)

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/bootcamp')

module.exports = mongoose.connection;


