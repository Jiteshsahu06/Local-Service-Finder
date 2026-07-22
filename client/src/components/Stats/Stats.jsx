import {
  FaUsers,
  FaUserTie,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-5xl text-blue-600" />,
    number: "5000+",
    title: "Happy Customers",
  },
  {
    icon: <FaUserTie className="text-5xl text-green-600" />,
    number: "250+",
    title: "Professionals",
  },
  {
    icon: <FaCalendarCheck className="text-5xl text-purple-600" />,
    number: "10000+",
    title: "Bookings",
  },
  {
    icon: <FaStar className="text-5xl text-yellow-500" />,
    number: "4.9",
    title: "Average Rating",
  },
];

function Stats() {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/20 transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-200">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;