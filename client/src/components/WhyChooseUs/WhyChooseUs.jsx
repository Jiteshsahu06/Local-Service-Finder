import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "verified",
    title: "Verified Professionals",
    desc: "All service providers are background verified and experienced.",
  },
  {
    icon: "support",
    title: "24/7 Support",
    desc: "Our support team is always available to help you.",
  },
  {
    icon: "pricing",
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges.",
  },
  {
    icon: "experts",
    title: "Trusted Experts",
    desc: "Thousands of satisfied customers trust our professionals.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-500 mb-12">
          We provide trusted and affordable local services.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;