function Services() {
  const services = [
    {
      name: "Nail Extensions",
      description: "Beautiful and long-lasting nail extensions for every style."
    },
    {
      name: "Nail Art",
      description: "Creative and stylish nail designs made just for you."
    },
    {
      name: "Manicure",
      description: "Professional nail care for clean and beautiful hands."
    },
    {
      name: "Nail Polish",
      description: "Elegant colors and finishes to complete your look."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p className="section-small-title">OUR SERVICES</p>
        <h2>Beauty at Your Fingertips</h2>
        <p>
          Explore our professional nail services designed to make you feel
          confident and beautiful.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-number">0{index + 1}</div>

            <h3>{service.name}</h3>

            <p>{service.description}</p>

            <a
              href="https://wa.me/9779741867787"
              target="_blank"
              rel="noreferrer"
            >
              Inquire Now →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;