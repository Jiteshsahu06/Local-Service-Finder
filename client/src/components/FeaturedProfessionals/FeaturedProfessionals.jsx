import ProfessionalCard from "./ProfessionalCard";

const professionals = [
  {
    id: 1,
    name: "Rahul Sharma",
    profession: "Electrician",
    rating: "4.9",
    location: "Jaipur",
    price: 299,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Amit Verma",
    profession: "Plumber",
    rating: "4.8",
    location: "Jaipur",
    price: 349,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Rohit Singh",
    profession: "Carpenter",
    rating: "4.7",
    location: "Jaipur",
    price: 399,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Neha Sharma",
    profession: "Cleaning Expert",
    rating: "4.9",
    location: "Jaipur",
    price: 499,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function FeaturedProfessionals() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Professionals
          </h2>

          <p className="text-gray-500 mt-3">
            Meet some of our top-rated local service professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              {...professional}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProfessionals;