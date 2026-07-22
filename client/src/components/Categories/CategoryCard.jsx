import {
  FaBolt,
  FaFaucet,
  FaHammer,
  FaPaintRoller,
  FaSnowflake,
  FaBroom,
  FaCut,
  FaCar,
} from "react-icons/fa";

const icons = {
  electrician: <FaBolt className="text-4xl text-yellow-500" />,
  plumber: <FaFaucet className="text-4xl text-blue-500" />,
  carpenter: <FaHammer className="text-4xl text-orange-500" />,
  painter: <FaPaintRoller className="text-4xl text-pink-500" />,
  ac: <FaSnowflake className="text-4xl text-cyan-500" />,
  cleaning: <FaBroom className="text-4xl text-green-500" />,
  salon: <FaCut className="text-4xl text-purple-500" />,
  car: <FaCar className="text-4xl text-red-500" />,
};

function CategoryCard({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
      <div className="flex justify-center mb-4">
        {icons[icon]}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>
    </div>
  );
}

export default CategoryCard;