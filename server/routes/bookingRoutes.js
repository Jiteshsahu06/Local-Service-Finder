const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
  deleteBooking,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

router.delete("/:id", deleteBooking);

module.exports = router;