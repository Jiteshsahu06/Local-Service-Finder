import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const [bookings, setBookings] = useState([]);
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => {
    fetchUsers();
    fetchBookings();
  }, []);

  const fetchUsers = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/api/admin/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      setUsers(data.users);
      setTotalUsers(data.totalUsers);
    }
  } catch (error) {
    console.error(error);
  }
};

  const fetchBookings = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/api/admin/bookings",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      setBookings(data.bookings);
      setTotalBookings(data.totalBookings);
    }
  } catch (error) {
    console.error(error);
  }
};

  // Update Booking Status
const updateStatus = async (bookingId, status) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/admin/bookings/${bookingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Booking status updated successfully!");
      fetchBookings();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

const deleteBooking = async (id) => {
  const token = localStorage.getItem("token");

  if (!window.confirm("Are you sure you want to delete this booking?")) {
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:5000/api/admin/bookings/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Booking deleted successfully");
      fetchBookings();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Admin Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Users</h2>
          <p className="text-4xl mt-4">{totalUsers}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Bookings</h2>
          <p className="text-4xl mt-4">{totalBookings}</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="text-4xl mt-4">6</p>
        </div>

      </div>

      {/* Users Table */}
      <div className="mt-10 bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          All Users
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse border border-gray-300">

            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border p-3">{user.name}</td>
                  <td className="border p-3">{user.email}</td>
                  <td className="border p-3">{user.phone}</td>
                  <td className="border p-3 capitalize">
                    {user.role}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

      {/* Bookings Table */}
      <div className="mt-10 bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          All Bookings
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse border border-gray-300">

            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Customer</th>
                <th className="border p-3">Service</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>

                  <td className="border p-3">
                    {booking.customerName}
                  </td>

                  <td className="border p-3">
                    {booking.service}
                  </td>

                  <td className="border p-3">
                    {booking.phone}
                  </td>

                  <td className="border p-3">
                    <select
                      value={booking.status}
                      onChange={(e) =>
                        updateStatus(
                          booking._id,
                          e.target.value
                        )
                      }
                      className="border rounded px-2 py-1"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td className="border p-3 text-center">
                    <button
                        onClick={() => deleteBooking(booking._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                         Delete
                      </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default AdminDashboard;