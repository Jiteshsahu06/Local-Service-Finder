import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaFaucet,
  FaHammer,
  FaPaintRoller,
  FaSnowflake,
  FaBroom,
  FaCar,
  FaCut,
  FaStar,
  FaSearch,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    name: "Electrician",
    category: "Repair",
    price: 299,
    rating: 4.8,
    icon: <FaBolt />,
    description: "Electrical repair, wiring, switches and installation.",
  },
  {
    id: 2,
    name: "Plumber",
    category: "Repair",
    price: 349,
    rating: 4.7,
    icon: <FaFaucet />,
    description: "Pipe leakage, taps, bathroom and plumbing services.",
  },
  {
    id: 3,
    name: "Carpenter",
    category: "Home",
    price: 399,
    rating: 4.9,
    icon: <FaHammer />,
    description: "Furniture repair, installation and custom wood work.",
  },
  {
    id: 4,
    name: "Painter",
    category: "Home",
    price: 499,
    rating: 4.6,
    icon: <FaPaintRoller />,
    description: "Professional interior and exterior painting services.",
  },
  {
    id: 5,
    name: "AC Repair",
    category: "Appliance",
    price: 599,
    rating: 4.8,
    icon: <FaSnowflake />,
    description: "AC servicing, repair, installation and maintenance.",
  },
  {
    id: 6,
    name: "Home Cleaning",
    category: "Cleaning",
    price: 699,
    rating: 4.9,
    icon: <FaBroom />,
    description: "Complete professional cleaning for your home.",
  },
  {
    id: 7,
    name: "Car Wash",
    category: "Cleaning",
    price: 399,
    rating: 4.7,
    icon: <FaCar />,
    description: "Professional exterior and interior car cleaning.",
  },
  {
    id: 8,
    name: "Salon at Home",
    category: "Beauty",
    price: 799,
    rating: 4.9,
    icon: <FaCut />,
    description: "Convenient professional salon services at your home.",
  },
];

const categories = [
  "All",
  "Repair",
  "Home",
  "Appliance",
  "Cleaning",
  "Beauty",
];

function Services() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredServices = servicesData.filter((service) => {
  const matchesSearch = service.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    service.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Find the Right Service
          </h1>

          <p className="mt-4 text-blue-100">
            Trusted professionals for all your local service needs.
          </p>

          <div className="max-w-xl mx-auto mt-8 bg-white rounded-xl flex items-center px-4 shadow-lg">
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search electrician, plumber, cleaning..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-4 text-gray-800 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold">All Services</h2>
            <p className="text-gray-500 mt-2">
              {filteredServices.length} services available
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

        {filteredServices.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-2xl">
                  {service.icon}
                </div>

                <p className="text-sm text-blue-600 font-medium mt-5">
                  {service.category}
                </p>

                <h3 className="text-xl font-bold mt-1">
                  {service.name}
                </h3>

                <p className="text-gray-500 text-sm mt-3 min-h-10">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">{service.rating}</span>
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <div>
                    <span className="text-gray-500 text-sm">Starting at</span>
                    <p className="text-xl font-bold">₹{service.price}</p>
                  </div>

                  <button
  onClick={() =>
    navigate("/booking", {
      state: {
        serviceName: service.name,
        price: service.price,
      },
    })
  }
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
>
  Book Now
</button>



                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl p-12">
            <h3 className="text-xl font-bold">No services found</h3>
            <p className="text-gray-500 mt-2">
              Try searching for another service.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Services;