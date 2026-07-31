import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Find Trusted Local Professionals Near You
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Book electricians, plumbers, painters, carpenters,
            cleaning services and much more in minutes.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/services")}
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
            >
              Book Now
            </button>

            <button
              onClick={() => navigate("/services")}
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700"
            alt="Professional Services"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;