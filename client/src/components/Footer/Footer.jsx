import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Local Service Finder
            </h2>

            <p className="text-gray-400 leading-7">
              Find trusted local professionals for your everyday service
              needs quickly and conveniently.
            </p>

            <div className="flex gap-3 mt-6">
              <a className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 cursor-pointer">
                <FaFacebookF />
              </a>

              <a className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 cursor-pointer">
                <FaInstagram />
              </a>

              <a className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 cursor-pointer">
                <FaLinkedinIn />
              </a>

              <a className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 cursor-pointer">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-white">
                Home
              </Link>

              <Link to="/services" className="hover:text-white">
                Services
              </Link>

              <Link to="/login" className="hover:text-white">
                Login
              </Link>

              <Link to="/signup" className="hover:text-white">
                Signup
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Popular Services
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>Electrician</p>
              <p>Plumber</p>
              <p>Carpenter</p>
              <p>AC Repair</p>
              <p>Home Cleaning</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt />
                Jaipur, Rajasthan
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt />
                +91 XXXXX XXXXX
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope />
                support@localservicefinder.com
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
        © 2026 Local Service Finder. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;