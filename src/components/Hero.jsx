function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="welcome-text">WELCOME TO</p>

        <h1>
          Sona Nail Studio
          <br />
          <span>& Academy</span>
        </h1>

        <p className="hero-description">
          Enhance your beauty and express your style with beautiful,
          professional nail services and expert nail training.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/779741867787"
            className="primary-button"
            target="_blank"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:+9779741867787"
            className="secondary-button"
          >
            Call Us
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/src/assets/hero-nails.webp" alt="Beautiful nail design" />
      </div>
    </section>
  );
}

export default Hero;