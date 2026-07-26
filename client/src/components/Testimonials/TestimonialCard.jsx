import { FaStar, FaQuoteLeft } from "react-icons/fa";

function TestimonialCard({ name, review, image, rating }) {
  return (
    <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      
      <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />

      <p className="text-gray-600 leading-relaxed">
        "{review}"
      </p>

      <div className="flex gap-1 mt-5">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
      </div>

      <div className="flex items-center gap-4 mt-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">Verified Customer</p>
        </div>
      </div>

    </div>
  );
}

export default TestimonialCard;