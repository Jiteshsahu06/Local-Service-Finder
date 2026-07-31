const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  getAllUsers,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/adminController");

const router = express.Router();

// Get All Users
router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getAllUsers
);

// Get All Bookings
router.get(
  "/bookings",
  authMiddleware,
  adminMiddleware,
  getAllBookings
);

// Update Booking Status
router.put(
  "/bookings/:id",
  authMiddleware,
  adminMiddleware,
  updateBookingStatus
);

// Delete Booking
router.delete(
  "/bookings/:id",
  authMiddleware,
  adminMiddleware,
  deleteBooking
);

module.exports = router;