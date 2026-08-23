import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/products.css";

import productBanner from "../assets/product-banner.jpg";
import product1 from "../assets/products/product1.jpeg";

import {
  FaSearch,
  FaTimes,
  FaPaw,
  FaArrowRight,
} from "react-icons/fa";

function Products() {

  const products = [

    {
      id: 1,
      image: product1,
      name: "Chitramin-Forte",
      category: "Feed Supplement",
      approved: true,
      description:
        "Chitramin-Forte is an advanced chelated mineral and vitamin feed supplement formulated to support the overall health, growth, productivity and nutritional requirements of livestock.",
      benefits: [
        "Supports overall health and wellness",
        "Helps support reproductive health and estrus",
        "Supports healthy growth and development",
        "Helps support milk productivity",
        "Supports mineral and vitamin balance",
        "Helps maintain healthy coat and body condition",
      ],
    },

    {
      id: 2,
      name: "Coming Soon",
      category: "Upcoming",
      approved: false,
    },

    {
      id: 3,
      name: "Coming Soon",
      category: "Upcoming",
      approved: false,
    },

    {
      id: 4,
      name: "Coming Soon",
      category: "Upcoming",
      approved: false,
    },

    {
      id: 5,
      name: "Coming Soon",
      category: "Upcoming",
      approved: false,
    },

    {
      id: 6,
      name: "Coming Soon",
      category: "Upcoming",
      approved: false,
    },

  ];

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) => {

    const matchCategory =
      category === "All" ||
      product.category === category;

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchCategory && matchSearch;

  });

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section
        className="products-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.68),rgba(0,0,0,.68)),url(${productBanner})`
        }}
      >

        <div className="container">

          <h1>Our Products</h1>

          <p>
            Home <span>/</span> Products
          </p>

        </div>

      </section>


      {/* PRODUCTS */}

      <section className="products-section">

        <div className="container">


          {/* HEADING */}

          <div className="products-heading">

            <span>CHITRAVET PHARMA PRODUCTS</span>

            <h2>
              Veterinary Healthcare Solutions
            </h2>

            <p>
              Explore our range of veterinary healthcare and
              nutritional products developed to support animal
              health and productivity.
            </p>

          </div>


          {/* SEARCH */}

          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search Product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          {/* FILTER */}

          <div className="product-filter">

            {[
              "All",
              "Feed Supplement",
              "Upcoming",
            ].map((item) => (

              <button
                key={item}
                className={
                  category === item ? "active" : ""
                }
                onClick={() => setCategory(item)}
              >

                {item}

              </button>

            ))}

          </div>


          {/* PRODUCT GRID */}

          <div className="product-grid">

            {filteredProducts.map((product) => (

              product.approved ? (

                <div
                  className="product-card"
                  key={product.id}
                >

                  <div className="product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>


                  <div className="product-content">

                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <p className="product-short-description">
                      Advanced Mineral & Vitamin Feed Supplement
                    </p>

                    <button
                      onClick={() =>
                        setSelectedProduct(product)
                      }
                    >

                      View Product

                      <FaArrowRight />

                    </button>

                  </div>

                </div>

              ) : (

                <div
                  className="product-card upcoming-product"
                  key={product.id}
                >

                  <div className="coming-product-image">

                    <div className="paw-icon">

                      <FaPaw />

                    </div>

                    <div className="coming-label">

                      Coming Soon

                    </div>

                  </div>


                  <div className="product-content">

                    <span className="upcoming-category">
                      Upcoming Product
                    </span>

                    <h3>
                      New Veterinary Product
                    </h3>

                    <p className="product-short-description">
                      Our next veterinary healthcare product will
                      be introduced here soon.
                    </p>

                    <button
                      className="coming-soon-button"
                      disabled
                    >

                      Coming Soon

                    </button>

                  </div>

                </div>

              )

            ))}

          </div>


          {/* NO PRODUCT */}

          {filteredProducts.length === 0 && (

            <div className="no-product">

              <FaSearch />

              <h3>No Product Found</h3>

              <p>
                Try searching with a different product name.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* PRODUCT MODAL */}

      {selectedProduct && (

        <div className="product-modal">

          <div className="modal-box">


            <button
              className="close-modal"
              onClick={() =>
                setSelectedProduct(null)
              }
            >

              <FaTimes />

            </button>


            <div className="modal-top">

              <div className="modal-image-wrapper">

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />

              </div>

            </div>


            <div className="modal-content">

              <span className="modal-category">

                {selectedProduct.category}

              </span>


              <h2>

                {selectedProduct.name}

              </h2>


              <p className="modal-description">

                {selectedProduct.description}

              </p>


              <div className="product-benefits">

                <h3>
                  Key Benefits
                </h3>

                <ul>

                  {selectedProduct.benefits.map((benefit, index) => (

                    <li key={index}>

                      <span>✓</span>

                      {benefit}

                    </li>

                  ))}

                </ul>

              </div>


              <div className="product-note">

                <strong>Note:</strong> For complete product
                information and feeding recommendations, please
                refer to the product label or consult a qualified
                veterinary professional.

              </div>

            </div>

          </div>

        </div>

      )}


      <Footer />

    </>

  );

}

export default Products;