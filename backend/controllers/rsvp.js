const rsvp = require('../models/rsvp');
const RSVP = require('../models/rsvp');

exports.getAllGuests = (req, res, next) => {
  // find method returns an array containing all of the
  //  Sauces in the database
  console.log(rsvp);
  RSVP.find()
    .then((guests) => {
      console.log('HEREREARASDF');
      res.status(200).json(guests);
      console.log(guests);
    })
    .catch((error) => {
      console.log('error here', error);
      res.status(400).json({
        error: error,
      });
    });
};
