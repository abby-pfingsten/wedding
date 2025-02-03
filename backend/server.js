// // const { MongoClient } = require('mongodb');
// // const uri = "mongodb+srv://abbypfingsten:q1QVxPKmpLhPD5fF@cluster0.47dfkhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 8000;

// // app.get('/', (req, res) => {
// //   res.send('Hello from the Node.js backend!');
// // });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const mongoose = require('mongoose');

// // mongoose.connect(
// //   'mongodb+srv://abbypfingsten:q1QVxPKmpLhPD5fF@cluster0.47dfkhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// // );
// mongoose
//   .connect(
// 'mongodb+srv://abbypfingsten:q1QVxPKmpLhPD5fF@cluster0.47dfkhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//   )
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.log('MongoDB connection error:', error));

// const Guest = require('./models/rsvp'); // Create the Item model

// app.use(express.json());
// const rsvpRoutes = require('./routes/rsvp');
// app.use('/api/rsvp', rsvpRoutes);

// // app.get('/api/guests', async (req, res) => {
// //   try {
// //     const guests = await Guest.find();
// //     res.json(guests);
// //     console.log(res);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Server Error');
// //   }
// // });

// app.get('/', (req, resp) => {
//   resp.send('App is Working');
//   // You can check backend is working or not by
//   // entering http://loacalhost:5000

//   // If you see App is working means
//   // backend working properly
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://abbypfingsten:q1QVxPKmpLhPD5fF@cluster0.47dfkhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Routes
const rsvpRoutes = require('./routes/rsvp');
app.use('/api/rsvp', rsvpRoutes);

app.get('/', (req, res) => {
  res.send('App is Working');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
