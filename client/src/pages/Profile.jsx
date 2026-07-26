import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaCalendarCheck,
} from "react-icons/fa";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Demo User",
    email: "demo@example.com",
    phone: "9876543210",
    location: "Jaipur, Rajasthan",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-5">

              <div className="w-24 h-24 bg-white text-blue-700 rounded-full flex items-center justify-center text-4xl">
                <FaUser />
              </div>

              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold">
                  {user.name}
                </h1>

                <p className="text-blue-100 mt-1">
                  Local Service Finder Customer
                </p>
              </div>

            </div>
          </div>

          {/* Profile Information */}
          <div className="p-8">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                Personal Information
              </h2>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  <FaEdit />
                  Edit Profile
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <ProfileField
                icon={<FaUser />}
                label="Full Name"
                name="name"
                value={user.name}
                editing={isEditing}
                onChange={handleChange}
              />

              <ProfileField
                icon={<FaEnvelope />}
                label="Email Address"
                name="email"
                value={user.email}
                editing={isEditing}
                onChange={handleChange}
              />

              <ProfileField
                icon={<FaPhone />}
                label="Phone Number"
                name="phone"
                value={user.phone}
                editing={isEditing}
                onChange={handleChange}
              />

              <ProfileField
                icon={<FaMapMarkerAlt />}
                label="Location"
                name="location"
                value={user.location}
                editing={isEditing}
                onChange={handleChange}
              />

            </div>

            {isEditing && (
              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            )}

            <hr className="my-8 border-gray-200" />

            <Link
              to="/dashboard"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
            >
              <FaCalendarCheck />
              View My Bookings
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}

function ProfileField({
  icon,
  label,
  name,
  value,
  editing,
  onChange,
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-gray-500 text-sm mb-2">
        <span className="text-blue-600">{icon}</span>
        {label}
      </label>

      {editing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
        />
      ) : (
        <div className="bg-gray-50 rounded-lg px-4 py-3 font-medium">
          {value}
        </div>
      )}
    </div>
  );
}

export default Profile;