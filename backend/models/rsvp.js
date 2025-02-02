const mongoose = require('mongoose');

const rsvpSchema = mongoose.Schema({
  rsvpId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('RSVP', rsvpSchema);
