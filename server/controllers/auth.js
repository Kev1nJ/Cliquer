// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User');


const authController = {
  async register(req, res, next) {
    try {
      // Validate 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Extract email and password 
      const { email, password } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error.message);
      next(error);
    }
  },

  async logout(req, res) {
    // Logout logic NEEDED
    res.json({ message: 'Logout successful' });
  },

  async login(req, res, next) {
    try {
      // Validate request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Extract email and password 
      const { email, password } = req.body;

      // Check if the user exists in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // If the credentials are valid, generate a JWT token with 1-hour expiration
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '6h' });

      // Send the token in the response
      res.json({ token });
    } catch (error) {
      console.error('Error in login route:', error.message);
      next(error);
    }
  },
};

module.exports = authController;
