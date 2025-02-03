const express = require('express');
const router = express.Router();
const rsvpCtrl = require('../controllers/rsvp');

router.get('/', rsvpCtrl.getAllGuests);
router.post('/', rsvpCtrl.sendRSVP);
router.get('/', rsvpCtrl.getOneGuest);
module.exports = router;
