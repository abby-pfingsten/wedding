require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware for CORS
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://abbyandrew.love'], // Allow both local and production
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`Connected to MongoDB: ${mongoose.connection.name}`))
  .catch((error) => console.log('MongoDB connection error:', error));

// Routes
const rsvpRoutes = require('./routes/rsvp');
app.use('/api/rsvp', rsvpRoutes);

// Default route (you already have this working)
app.get('/', (req, res) => {
  res.send('App is Working');
});

// Handle preflight OPTIONS request
app.options('*', cors());

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
