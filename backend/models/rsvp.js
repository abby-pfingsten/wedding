const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema(
  {
    // rsvpId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    allergies: { type: String, required: false },
    note: { type: String, required: false },
  },
  { collection: 'guestTable' }
);

module.exports = mongoose.model('RSVP', rsvpSchema);
