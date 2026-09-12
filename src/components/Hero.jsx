import heroImage from "../assets/images/hero-nails.webp";

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
          <a href="#contact" className="primary-button">
            Contact Us
          </a>

          <a href="tel:+9779741867787" className="secondary-button">
            Call Us
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Beautiful nail design" />
      </div>
    </section>
  );
}

export default Hero;