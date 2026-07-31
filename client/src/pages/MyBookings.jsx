import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        const userId = user._id || user.id;

        const response = await fetch(
          `http://localhost:5000/api/bookings?user=${userId}`
        );

        const data = await response.json();

        if (data.success) {
          setBookings(data.bookings);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);

  // ✅ Cancel Booking
  const handleCancel = async (bookingId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/bookings/${bookingId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Booking cancelled successfully!");

        setBookings((prevBookings) =>
          prevBookings.filter(
            (booking) => booking._id !== bookingId
          )
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow rounded-xl p-6"
            >
              <h2 className="text-xl font-bold">
                {booking.service}
              </h2>

              <p>
                <strong>Name:</strong> {booking.customerName}
              </p>

              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>

              <p>
                <strong>Address:</strong> {booking.address}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {new Date(booking.bookingDate).toLocaleDateString()}
              </p>

              <p>
                <strong>Status:</strong> {booking.status}
              </p>

              {/* ✅ Cancel Button */}
              <button
                onClick={() => handleCancel(booking._id)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;