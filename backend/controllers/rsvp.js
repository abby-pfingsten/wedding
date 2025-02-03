const RSVP = require('../models/rsvp');

exports.getAllGuests = async (req, res) => {
  try {
    const guests = await RSVP.find();
    res.status(200).json(guests);
  } catch (error) {
    console.error('Error fetching guests:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};
