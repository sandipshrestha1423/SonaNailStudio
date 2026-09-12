function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="section-small-title">CONTACT US</p>

        <h2>Let's Create Something Beautiful</h2>

        <p>
          Have a question about our nail services or academy courses?
          Contact us and we will be happy to help you.
        </p>

        <div className="contact-buttons">
          <a
            href="https://wa.me/9779741867787"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
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

      <div className="contact-info">
        <div>
          <h3>Phone</h3>
          <p>+977 9741867787</p>
        </div>

        <div>
          <h3>WhatsApp</h3>
          <p>+977 9741867787</p>
        </div>

        <div>
          <h3>Visit Us</h3>
          <p>Banasthali, Kathmandu</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;