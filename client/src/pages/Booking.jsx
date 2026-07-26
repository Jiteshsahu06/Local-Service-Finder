import { useLocation } from "react-router-dom";
import { useState } from "react";

function Booking() {
  const location = useLocation();

  const serviceName = location.state?.serviceName || "Select a Service";
  const price = location.state?.price || 0;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Book Your Service</h1>

          <p className="text-gray-500 mt-3">
            Enter your details to schedule your service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-white shadow-md rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">
              Booking Details
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">

              <div>
                <label className="block font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Service Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Time Slot
                </label>

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">Select time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>

            </div>

            <div className="mt-5">
              <label className="block font-medium mb-2">
                Service Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Enter complete address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Confirm Booking
            </button>
          </form>

          {/* Summary */}
          <div className="bg-white shadow-md rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-6">
              Booking Summary
            </h2>

            <p className="text-gray-500 text-sm">
              Selected Service
            </p>

            <h3 className="text-xl font-bold mt-1">
              {serviceName}
            </h3>

            <hr className="my-5 border-gray-200" />

            <div className="flex justify-between">
              <span className="text-gray-500">
                Starting Price
              </span>

              <span className="font-bold text-xl">
                ₹{price}
              </span>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Final price may vary depending on the required work.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Booking;