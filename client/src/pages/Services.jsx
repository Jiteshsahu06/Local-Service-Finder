const services = [
  {
    id: 1,
    title: "Electrician",
    icon: "⚡",
    price: "₹299",
    rating: "4.8",
  },
  {
    id: 2,
    title: "Plumber",
    icon: "🚰",
    price: "₹399",
    rating: "4.7",
  },
  {
    id: 3,
    title: "Carpenter",
    icon: "🪚",
    price: "₹499",
    rating: "4.9",
  },
  {
    id: 4,
    title: "AC Repair",
    icon: "❄️",
    price: "₹699",
    rating: "4.8",
  },
  {
    id: 5,
    title: "Cleaning",
    icon: "🧹",
    price: "₹599",
    rating: "4.6",
  },
  {
    id: 6,
    title: "Salon",
    icon: "💇",
    price: "₹799",
    rating: "4.9",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Our Services
        </h1>

        <div className="mb-10">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full md:w-1/2 block mx-auto border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>

              <p className="text-gray-600 mt-2">
                Rating ⭐ {service.rating}
              </p>

              <p className="text-blue-700 font-bold text-xl mt-2">
                Starting From {service.price}
              </p>

              <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                Book Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Services;