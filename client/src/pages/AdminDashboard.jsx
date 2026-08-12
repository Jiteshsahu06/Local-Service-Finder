import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const [bookings, setBookings] = useState([]);
  const [totalBookings, setTotalBookings] = useState(0);

  const [loading, setLoading] = useState(true);

    const [searchUser, setSearchUser] = useState("");
  const [bookingStatus, setBookingStatus] = useState("All");
const [searchBooking, setSearchBooking] = useState("");



  useEffect(() => {
    fetchUsers();
    fetchBookings();
  }, []);

//   const fetchUsers = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     const response = await fetch(
//       "https://local-service-finder-fb3n.onrender.com/api/admin/users",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const data = await response.json();

//     if (data.success) {
//       setUsers(data.users);
//       setTotalUsers(data.totalUsers);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };


const fetchUsers = async () => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");

    console.log("Token:", token);

    const response = await fetch(
      "https://local-service-finder-fb3n.onrender.com/api/admin/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("Response:", data);

    if (data.success) {
      setUsers(data.users);
      setTotalUsers(data.totalUsers);
    }
    setLoading(false);
  } catch (error) {
    console.error("Fetch Error:", error);
    setLoading(false);
  }
};

  const fetchBookings = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "https://local-service-finder-fb3n.onrender.com/api/admin/bookings",
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
      `https://local-service-finder-fb3n.onrender.com/api/admin/bookings/${bookingId}`,
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
      `https://local-service-finder-fb3n.onrender.com/api/admin/bookings/${id}`,
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

const deleteUser = async (id) => {
  const token = localStorage.getItem("token");

  if (!window.confirm("Are you sure you want to delete this user?")) {
    return;
  }

  try {
    const response = await fetch(
      `https://local-service-finder-fb3n.onrender.com/api/admin/users/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("User deleted successfully");
      fetchUsers();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

const pendingBookings = bookings.filter(
  (booking) => booking.status === "Pending"
).length;

const acceptedBookings = bookings.filter(
  (booking) => booking.status === "Accepted"
).length;

const completedBookings = bookings.filter(
  (booking) => booking.status === "Completed"
).length;

const cancelledBookings = bookings.filter(
  (booking) => booking.status === "Cancelled"
).length;


  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Admin Dashboard
      </h1>

{/* Dashboard Cards */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

  <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
    <h2 className="text-lg font-bold">Users</h2>
    <p className="text-3xl mt-2">{totalUsers}</p>
  </div>

  <div className="bg-green-600 text-white p-5 rounded-xl shadow">
    <h2 className="text-lg font-bold">Bookings</h2>
    <p className="text-3xl mt-2">{totalBookings}</p>
  </div>

  <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
    <h2 className="text-lg font-bold">Pending</h2>
    <p className="text-3xl mt-2">{pendingBookings}</p>
  </div>

  <div className="bg-indigo-600 text-white p-5 rounded-xl shadow">
    <h2 className="text-lg font-bold">Accepted</h2>
    <p className="text-3xl mt-2">{acceptedBookings}</p>
  </div>

  <div className="bg-emerald-600 text-white p-5 rounded-xl shadow">
    <h2 className="text-lg font-bold">Completed</h2>
    <p className="text-3xl mt-2">{completedBookings}</p>
  </div>

  <div className="bg-red-600 text-white p-5 rounded-xl shadow">
    <h2 className="text-lg font-bold">Cancelled</h2>
    <p className="text-3xl mt-2">{cancelledBookings}</p>
  </div>

</div>

      {/* Users Table */}
      <div className="mt-10 bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          All Users
        </h2>

        <input
  type="text"
  placeholder="Search by Name or Email..."
  value={searchUser}
  onChange={(e) => setSearchUser(e.target.value)}
  className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>



        <div className="overflow-x-auto">

          <table className="w-full border-collapse border border-gray-300">

            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Role</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

<tbody>
  {users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.email.toLowerCase().includes(searchUser.toLowerCase())
    )
    .map((user) => (
      <tr key={user._id}>
        <td className="border p-3">{user.name}</td>
        <td className="border p-3">{user.email}</td>
        <td className="border p-3">{user.phone}</td>
        <td className="border p-3 capitalize">{user.role}</td>

        <td className="border p-3 text-center">
          <button
            onClick={() => deleteUser(user._id)}
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

      {/* Bookings Table */}
      <div className="mt-10 bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          All Bookings
        </h2>
        <div className="flex gap-4 mb-4">
  <input
    type="text"
    placeholder="Search Customer..."
    value={searchBooking}
    onChange={(e) => setSearchBooking(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3"
  />

  <select
    value={bookingStatus}
    onChange={(e) => setBookingStatus(e.target.value)}
    className="border border-gray-300 rounded-lg p-3"
  >
    <option value="All">All</option>
    <option value="Pending">Pending</option>
    <option value="Accepted">Accepted</option>
    <option value="Completed">Completed</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</div>

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
  {bookings
    .filter((booking) => {
      const matchSearch = booking.customerName
        .toLowerCase()
        .includes(searchBooking.toLowerCase());

      const matchStatus =
        bookingStatus === "All" ||
        booking.status === bookingStatus;

      return matchSearch && matchStatus;
    })
    .map((booking) => (
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