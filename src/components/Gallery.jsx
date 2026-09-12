function Gallery() {
  const images = [
    "/src/assets/gallery1.webp",
    "/src/assets/gallery2.webp",
    "/src/assets/gallery3.webp",
    "/src/assets/gallery4.webp",
    "/src/assets/gallery5.webp",
    "/src/assets/gallery6.webp"
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