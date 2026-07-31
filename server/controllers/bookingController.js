const Booking = require("../models/Booking");

// Create Booking
const createBooking = async (req, res) => {
  try {
    const { user, customerName, phone, service, address, bookingDate } = req.body;

    const booking = await Booking.create({
      user,
      customerName,
      phone,
      service,
      address,
      bookingDate,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Bookings
const getBookings = async (req, res) => {
  try {
    const { user } = req.query;

    const bookings = await Booking.find({ user }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ module.exports HAMESHA END me rakho
module.exports = {
  createBooking,
  getBookings,
  deleteBooking,
};