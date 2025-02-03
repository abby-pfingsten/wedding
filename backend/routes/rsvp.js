const express = require('express');
const router = express.Router();
const rsvpCtrl = require('../controllers/rsvp');

router.get('/', rsvpCtrl.getAllGuests);

module.exports = router;
