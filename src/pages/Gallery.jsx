import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import galleryBanner from "../assets/gallery-banner.jpg";

import img1 from "../assets/gallery/gallery1.jpeg";
import img2 from "../assets/gallery/gallery2.jpeg";
import img3 from "../assets/gallery/gallery3.jpeg";
import img4 from "../assets/gallery/gallery4.jpeg";
import img5 from "../assets/gallery/gallery5.png";
import img6 from "../assets/gallery/gallery6.png";
import img7 from "../assets/gallery/gallery7.png";
import img8 from "../assets/gallery/gallery8.png";
import img9 from "../assets/gallery/gallery9.png";

import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "../styles/gallery.css";

function Gallery() {

  const galleryData = [
    {
      id: 1,
      image: img1,
      category: "Office",
    },
    {
      id: 2,
      image: img2,
      category: "Products",
    },
    {
      id: 3,
      image: img3,
      category: "Events",
    },
    {
      id: 4,
      image: img4,
      category: "Office",
    },
    {
      id: 5,
      image: img5,
      category: "Products",
    },
    {
      id: 6,
      image: img6,
      category: "Events",
    },
    {
      id: 7,
      image: img7,
      category: "Office",
    },
    {
      id: 8,
      image: img8,
      category: "Products",
    },
    {
      id: 9,
      image: img9,
      category: "Events",
    },
  ];

  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    category === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === category);

  const currentIndex = filteredImages.findIndex(
    (item) => item.image === selectedImage
  );

  const nextImage = () => {
    const next =
      (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[next].image);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + filteredImages.length) %
      filteredImages.length;
    setSelectedImage(filteredImages[prev].image);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="gallery-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url(${galleryBanner})`,
        }}
      >
        <div className="container">

          <h1>Gallery</h1>

          <p>
            Home <span>/</span> Gallery
          </p>

        </div>
      </section>

      {/* Gallery */}

      <section className="gallery-section">

        <div className="container">

          <div className="gallery-heading">

            <span>OUR GALLERY</span>

            <h2>
              Moments, Products & Company Activities
            </h2>

            <p>
              Explore our collection showcasing veterinary
              healthcare products, office environment,
              exhibitions and company activities.
            </p>

          </div>

          {/* Filter */}

          <div className="gallery-filter">

            {["All", "Office", "Products", "Events"].map((item) => (

              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>

            ))}

          </div>

          {/* Gallery Grid */}

          <div className="gallery-grid">

            {filteredImages.map((item) => (

              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedImage(item.image)}
              >

                <img
                  src={item.image}
                  alt="Gallery"
                />

                <div className="gallery-overlay">

                  <FaSearchPlus />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Lightbox */}

      {selectedImage && (

        <div className="lightbox">

          <button
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>

          <button
            className="nav-btn left"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={selectedImage}
            alt="Preview"
          />

          <button
            className="nav-btn right"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

        </div>

      )}

      <Footer />
    </>
  );
}

export default Gallery;