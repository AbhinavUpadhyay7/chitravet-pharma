import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaBuilding,
} from "react-icons/fa";

import contactBanner from "../assets/contact-banner.jpg";

import "../styles/contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url(${contactBanner})`,
        }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Home <span>/</span> Contact
          </p>
        </div>
      </section>

      {/* Contact */}

      <section className="contact-section">

        <div className="container contact-container">

          {/* LEFT */}

          <div className="contact-left">

            <span className="contact-tag">
              GET IN TOUCH
            </span>

            <h2>
              Contact Information
            </h2>

            <p className="contact-text">
              We are committed to delivering trusted
              veterinary healthcare solutions across
              India. Feel free to contact us for product
              information, business inquiries, dealership
              opportunities, or general assistance.
            </p>

            <div className="contact-card">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3>Registered Office</h3>

                <p>
                  Indira Nagar,
                  <br />
                  Kalyan City,
                  <br />
                  Thane,
                  <br />
                  Maharashtra, India
                </p>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>

                <h3>Phone Number</h3>

                <p> +91 9559521107</p>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>

                <h3>Email Address</h3>

                <p>
                  chitravetpharma@gmail.com
                </p>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div>

                <h3>Working Hours</h3>

                <p>
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <FaBuilding />
              </div>

              <div>

                <h3>CIN</h3>

                <p>
                  U47720MH2025PTC438829
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="contact-right">

            <div className="map-box">

              <iframe
                title="Chitravet Pharma"
                src="https://www.google.com/maps?q=Indira+Nagar+Kalyan+Maharashtra&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Contact;