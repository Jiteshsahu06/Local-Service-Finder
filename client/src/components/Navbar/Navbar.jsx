import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Local Service Finder
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-yellow-300">
              Services
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-yellow-300">
              Login
            </Link>
          </li>

          <li>
            <Link to="/signup" className="hover:text-yellow-300">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;