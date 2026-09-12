function Academy() {
  return (
    <section className="academy" id="academy">
      <div className="academy-content">
        <p className="section-small-title">SONA NAIL ACADEMY</p>

        <h2>Turn Your Passion Into a Skill</h2>

        <p>
          Learn professional nail techniques and build your confidence with
          practical nail training at Sona Nail Studio & Academy.
        </p>

        <div className="academy-points">
          <div>
            <span>✓</span>
            Professional Nail Training
          </div>

          <div>
            <span>✓</span>
            Practical Learning
          </div>

          <div>
            <span>✓</span>
            Creative Nail Art Techniques
          </div>

          <div>
            <span>✓</span>
            Beginner Friendly Training
          </div>
        </div>

        <a
          href="https://wa.me/9779741867787"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Ask About Courses
        </a>
      </div>

      <div className="academy-image">
        <img
          src="/src/assets/academy.jpg"
          alt="Nail Training Academy"
        />
      </div>
    </section>
  );
}

export default Academy;