import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-blue-700 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold"
        >
          NearSeva
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <ul
          className={`
            ${menuOpen ? "flex" : "hidden"}
            absolute md:static
            top-full left-0
            w-full md:w-auto
            bg-blue-700 md:bg-transparent
            flex-col md:flex
            md:flex-row
            items-center
            gap-6 md:gap-7
            py-6 md:py-0
            font-medium
            shadow-lg md:shadow-none
            z-50
          `}
        >
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-yellow-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              onClick={closeMenu}
              className="hover:text-yellow-300"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/my-bookings"
              onClick={closeMenu}
              className="hover:text-yellow-300"
            >
              My Bookings
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              onClick={closeMenu}
              className="flex items-center gap-2 hover:text-yellow-300"
            >
              <FaUserCircle className="text-xl" />
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              onClick={closeMenu}
              className="hover:text-yellow-300"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              onClick={closeMenu}
              className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Signup
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;