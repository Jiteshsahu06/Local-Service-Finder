import { FaShieldAlt, FaClock, FaMoneyBillWave, FaUsers } from "react-icons/fa";

const icons = {
  verified: <FaShieldAlt className="text-5xl text-blue-600" />,
  support: <FaClock className="text-5xl text-green-600" />,
  pricing: <FaMoneyBillWave className="text-5xl text-yellow-500" />,
  experts: <FaUsers className="text-5xl text-purple-600" />,
};

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <div className="mb-5">{icons[icon]}</div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export default FeatureCard;