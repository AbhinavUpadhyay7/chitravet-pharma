import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/products.css";

import productBanner from "../assets/product-banner.jpg";

import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";
import product5 from "../assets/products/product5.jpg";
import product6 from "../assets/products/product6.jpg";

import {
  FaSearch,
  FaTimes,
} from "react-icons/fa";

function Products() {

  const products = [

    {
      id:1,
      image:product1,
      name:"Veterinary Injection A",
      category:"Injection",
      description:"High quality veterinary injectable formulation. Product details will be updated after regulatory approval."
    },

    {
      id:2,
      image:product2,
      name:"Veterinary Bolus B",
      category:"Bolus",
      description:"Premium veterinary bolus for livestock. Official information will be available after approval."
    },

    {
      id:3,
      image:product3,
      name:"Calcium Syrup C",
      category:"Syrup",
      description:"Advanced calcium supplement for animals. Product information coming soon."
    },

    {
      id:4,
      image:product4,
      name:"Mineral Supplement D",
      category:"Supplement",
      description:"Balanced mineral supplement for healthy livestock growth."
    },

    {
      id:5,
      image:product5,
      name:"Dewormer E",
      category:"Bolus",
      description:"Broad spectrum deworming formulation. Complete details coming soon."
    },

    {
      id:6,
      image:product6,
      name:"Multivitamin F",
      category:"Injection",
      description:"Veterinary multivitamin injection. Official launch under approval."
    }

  ];

  const [category,setCategory]=useState("All");
  const [search,setSearch]=useState("");
  const [selectedProduct,setSelectedProduct]=useState(null);

  const filteredProducts=products.filter((product)=>{

    const matchCategory=
      category==="All" ||
      product.category===category;

    const matchSearch=
      product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;

  });

  return(

    <>

      <Navbar/>

      {/* Hero */}

      <section
        className="products-hero"
        style={{
          backgroundImage:`linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url(${productBanner})`
        }}
      >

        <div className="container">

          <h1>Products</h1>

          <p>
            Home <span>/</span> Products
          </p>

        </div>

      </section>

      {/* Products */}

      <section className="products-section">

        <div className="container">

          <div className="products-heading">

            <span>OUR PRODUCTS</span>

            <h2>
              Veterinary Healthcare Solutions
            </h2>

            <p>
              Explore our range of veterinary pharmaceutical
              products. Product names and specifications will
              be updated after official approval.
            </p>

          </div>

          {/* Search */}

          <div className="search-box">

            <FaSearch/>

            <input
              type="text"
              placeholder="Search Product..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />

          </div>

          {/* Filter */}

          <div className="product-filter">

            {[
              "All",
              "Injection",
              "Bolus",
              "Syrup",
              "Supplement",
            ].map((item)=>(

              <button
                key={item}
                className={
                  category===item ? "active":""
                }
                onClick={()=>setCategory(item)}
              >

                {item}

              </button>

            ))}

          </div>

          {/* Product Grid */}

          <div className="product-grid">

            {filteredProducts.map((product)=>(

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

                  <span>
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <button
                    onClick={()=>
                      setSelectedProduct(product)
                    }
                  >
                    Know More
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Modal */}

      {selectedProduct && (

        <div className="product-modal">

          <div className="modal-box">

            <button
              className="close-modal"
              onClick={()=>
                setSelectedProduct(null)
              }
            >
              <FaTimes/>
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <span className="modal-category">
              {selectedProduct.category}
            </span>

            <h2>
              {selectedProduct.name}
            </h2>

            <p>
              {selectedProduct.description}
            </p>

            <div className="coming-soon">
              Product details will be updated after
              official regulatory approval.
            </div>

          </div>

        </div>

      )}

      <Footer/>

    </>

  );

}

export default Products;