function ServiceCard({ title, emoji }) {
  return (
    <div className="service-card">
      <h1>{emoji}</h1>

      <h3>{title}</h3>

      <button>Book Now</button>
    </div>
  );
}

export default ServiceCard;