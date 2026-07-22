import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-blue-700 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Join Local Service Finder
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Full Name</label>

          <div className="flex items-center border rounded-lg px-3">
            <FaUser className="text-gray-500" />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>

          <div className="flex items-center border rounded-lg px-3">
            <FaEnvelope className="text-gray-500" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Password</label>

          <div className="flex items-center border rounded-lg px-3">
            <FaLock className="text-gray-500" />

            <input
              type="password"
              placeholder="Create password"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Confirm Password</label>

          <div className="flex items-center border rounded-lg px-3">
            <FaLock className="text-gray-500" />

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-lg font-semibold transition">
          Create Account
        </button>

        <p className="text-center mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-indigo-700 font-semibold ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;