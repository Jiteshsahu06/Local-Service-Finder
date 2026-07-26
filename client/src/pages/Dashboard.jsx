import { useState } from "react";
import {
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const initialBookings = [
  {
    id: 1,
    service: "Electrician",
    date: "28 July 2026",
    time: "11:00 AM",
    address: "Jaipur, Rajasthan",
    price: 299,
    status: "Upcoming",
  },
  {
    id: 2,
    service: "Home Cleaning",
    date: "20 July 2026",
    time: "09:00 AM",
    address: "Jaipur, Rajasthan",
    price: 699,
    status: "Completed",
  },
  {
    id: 3,
    service: "Plumber",
    date: "15 July 2026",
    time: "02:00 PM",
    address: "Jaipur, Rajasthan",
    price: 349,
    status: "Cancelled",
  },
];

function Dashboard() {
  const [bookings, setBookings] = useState(initialBookings);
  const [filter, setFilter] = useState("All");

  const cancelBooking = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    setBookings(
      bookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: "Cancelled" }
          : booking
      )
    );
  };

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === filter);

  const upcoming = bookings.filter(
    (booking) => booking.status === "Upcoming"
  ).length;

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const cancelled = bookings.filter(
    (booking) => booking.status === "Cancelled"
  ).length;

  return (
    <main className="min-h-screen bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">My Bookings</h1>

          <p className="text-gray-500 mt-2">
            View and manage your service bookings.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

          <StatCard
            icon={<FaCalendarCheck />}
            title="Total Bookings"
            number={bookings.length}
          />

          <StatCard
            icon={<FaClock />}
            title="Upcoming"
            number={upcoming}
          />

          <StatCard
            icon={<FaCheckCircle />}
            title="Completed"
            number={completed}
          />

          <StatCard
            icon={<FaTimesCircle />}
            title="Cancelled"
            number={cancelled}
          />

        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["All", "Upcoming", "Completed", "Cancelled"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  filter === item
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Booking Cards */}
        <div className="space-y-5">

          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold">
                      {booking.service}
                    </h2>

                    <StatusBadge status={booking.status} />
                  </div>

                  <p className="text-gray-600">
                    📅 {booking.date} • {booking.time}
                  </p>

                  <p className="flex items-center gap-2 text-gray-500 mt-2">
                    <FaMapMarkerAlt />
                    {booking.address}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-sm text-gray-500">
                    Service Price
                  </p>

                  <p className="text-2xl font-bold">
                    ₹{booking.price}
                  </p>

                  {booking.status === "Upcoming" && (
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="mt-4 border border-red-500 text-red-600 px-5 py-2 rounded-lg hover:bg-red-50"
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}

          {filteredBookings.length === 0 && (
            <div className="bg-white text-center rounded-2xl p-12">
              <FaCalendarCheck className="text-5xl text-gray-300 mx-auto" />

              <h2 className="text-xl font-bold mt-4">
                No bookings found
              </h2>

              <p className="text-gray-500 mt-2">
                You don't have any bookings in this category.
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

function StatCard({ icon, title, number }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4">
      <div className="text-3xl text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-3xl font-bold">{number}</h3>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Upcoming: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default Dashboard;