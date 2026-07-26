import TestimonialCard from "./TestimonialCard";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review:
      "The electrician arrived on time and completed the work professionally. Very easy booking experience.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Ankit Verma",
    rating: 5,
    review:
      "I booked a plumber through Local Service Finder. The service was quick, affordable and reliable.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    rating: 5,
    review:
      "Great experience with the cleaning service. The professional was polite and the work was excellent.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-3">
            Real experiences from our happy customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} {...review} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;