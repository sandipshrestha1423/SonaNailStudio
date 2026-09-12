import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/gallery6.webp";

function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-heading">
        <p className="section-small-title">OUR WORK</p>

        <h2>Nail Art Gallery</h2>

        <p>
          A collection of beautiful nail designs created with creativity
          and care.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image}
              alt={`Nail design ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;