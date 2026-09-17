import aboutImage from "../assets/images/about-nails.webp";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutImage} alt="Sona Nail Studio" />
      </div>

      <div className="about-content">
        <p className="section-small-title">ABOUT US</p>

        <h2>
          Beauty, Creativity
          <br />
          & Confidence
        </h2>

        <p>
          At Sona's Nail Studio & Academy, we believe that beautiful nails
          are a way to express your personality and style.
        </p>

        <p>
          We provide professional nail services and quality training for
          those who want to learn and build their skills in nail artistry.
        </p>

        <div className="about-points">
          <div>
            <span>✦</span>
            Professional Nail Services
          </div>

          <div>
            <span>✦</span>
            Creative Nail Designs
          </div>

          <div>
            <span>✦</span>
            Nail Art Training
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;