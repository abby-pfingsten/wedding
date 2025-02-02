const express = require('express');
const router = express.Router();

// const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");

const rsvpCtrl = require('../controllers/rsvp');

router.get('/', rsvpCtrl.getAllGuests);

module.exports = router;
