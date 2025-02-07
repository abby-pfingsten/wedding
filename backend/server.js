// this is to connect to the .env file
require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());
console.log(MONGO_URI);
// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`Connected to MongoDB: ${mongoose.connection.name}`))
  .catch((error) => console.log('MongoDB connection error:', error));

// Routes
const rsvpRoutes = require('./routes/rsvp');
app.use('/api/rsvp', rsvpRoutes);

app.get('/', (req, res) => {
  res.send('App is Working');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
