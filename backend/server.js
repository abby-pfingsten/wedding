// this is to connect to the .env file
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB: ${mongoose.connection.name}`))
  .catch((error) => console.log('MongoDB connection error:', error));

// Routes
const rsvpRoutes = require('./routes/rsvp');
app.use('/api/rsvp', rsvpRoutes);

app.get('/', (req, res) => {
  res.send('App is Working');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
