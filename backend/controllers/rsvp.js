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

exports.sendRSVP = (req, res, next) => {
  //   bcrypt.hash(req.body.email, 10).then((hash) => {
  const rsvp = new RSVP({
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
  });
  rsvp
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Guest RSVP was successful!',
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
  //   });
};
