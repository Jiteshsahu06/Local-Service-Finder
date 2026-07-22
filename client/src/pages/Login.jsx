import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">Email</label>

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
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Password</label>

          <div className="flex items-center border rounded-lg px-3">
            <FaLock className="text-gray-500" />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold">
          Login
        </button>

        <p className="text-center mt-6">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-700 font-semibold ml-2"
          >
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;