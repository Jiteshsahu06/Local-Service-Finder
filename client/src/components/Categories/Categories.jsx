import CategoryCard from "./CategoryCard";

const data = [
  { icon: "electrician", title: "Electrician" },
  { icon: "plumber", title: "Plumber" },
  { icon: "carpenter", title: "Carpenter" },
  { icon: "painter", title: "Painter" },
  { icon: "ac", title: "AC Repair" },
  { icon: "cleaning", title: "Cleaning" },
  { icon: "salon", title: "Salon" },
  { icon: "car", title: "Car Wash" },
];

function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((item) => (
            <CategoryCard
              key={item.title}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;
