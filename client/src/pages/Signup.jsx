import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Frontend Validation
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone number must contain 10 digits.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // REGISTER API
      const response = await fetch(
        "https://local-service-finder-fb3n.onrender.com/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      setSuccess("Account created successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      // Go to login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to server. Please make sure backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-blue-700 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Join Local Service Finder
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg mb-5">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 p-3 rounded-lg mb-5">
            {success}
          </div>
        )}

        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Full Name
          </label>

          <div className="flex items-center border rounded-lg px-3 focus-within:border-indigo-500">
            <FaUser className="text-gray-500" />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Email
          </label>

          <div className="flex items-center border rounded-lg px-3 focus-within:border-indigo-500">
            <FaEnvelope className="text-gray-500" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Phone Number
          </label>

          <div className="flex items-center border rounded-lg px-3 focus-within:border-indigo-500">
            <FaPhone className="text-gray-500" />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
              maxLength="10"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Password
          </label>

          <div className="flex items-center border rounded-lg px-3 focus-within:border-indigo-500">
            <FaLock className="text-gray-500" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full p-3 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Confirm Password
          </label>

          <div className="flex items-center border rounded-lg px-3 focus-within:border-indigo-500">
            <FaLock className="text-gray-500" />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full p-3 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-700 hover:bg-indigo-800 disabled:bg-indigo-400 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Creating Account..." : "Create Account"}
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
      </form>
    </div>
  );
}

export default Signup;