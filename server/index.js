// server.js

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Coupon = require('./models/Coupon');
const User = require('../server/models/userSchema'); // Import the User model
const cors = require('cors');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/coupons', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes

// POST route to add a new coupon
app.post('/coupons', async (req, res) => {
  try {
    const { parentCompany, code, title, sellingPrice } = req.body; // Extract userId from request body
    // Create a new coupon instance
    const coupon = new Coupon({
      parentCompany,
      code,
      title,
      sellingPrice,
       // Associate the user with the coupon
    });
    await coupon.save(); // Save the new coupon to the database
    // Update the user's coupons array
  
    res.status(201).json({ message: 'Coupon added successfully', coupon });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// GET route to fetch all coupons
app.get('/coupons', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch coupons sold by a specific user
app.get('/user/:userId/coupons', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('coupons');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user.coupons);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }
    // Create a new user instance
    const newUser = new User({ name, email, password });
    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
