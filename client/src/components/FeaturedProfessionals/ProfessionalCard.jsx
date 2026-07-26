import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

function ProfessionalCard({ name, profession, rating, location, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>

        <p className="text-blue-600 font-medium mt-1">
          {profession}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <FaStar className="text-yellow-500" />
          <span>{rating}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

        <p className="text-lg font-bold mt-3">
          ₹{price} / Visit
        </p>

        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>

    </div>
  );
}

export default ProfessionalCard;