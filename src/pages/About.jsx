import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";

import { FaCheckCircle } from "react-icons/fa";

import aboutImage from "../assets/about-image.jpg";      // Add your image
import aboutBanner from "../assets/about-banner.jpg";    // Add your banner image


import "../styles/about.css";

function About() {
  return (
    <>
      <Navbar />

      {/* ================= ABOUT HERO ================= */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url(${aboutBanner})`,
        }}
      >
        <div className="container">
          <h1>About Us</h1>

          <p>
            Home <span>/</span> About Us
          </p>
        </div>
      </section>

      {/* ================= COMPANY INTRO ================= */}

      <section className="about-company">

        <div className="container about-container">

          {/* Left Image */}

          <div className="about-image">
            <img src={aboutImage} alt="Chitravet Pharma" />
          </div>

          {/* Right Content */}

          <div className="about-content">

            <span className="section-tag">
              ABOUT CHITRAVET PHARMA
            </span>

            <h2>
              Dedicated to Better Animal Healthcare Through Innovation
            </h2>

            <p>
              Chitravet Pharma Private Limited is committed to providing
              high-quality veterinary pharmaceutical products that improve
              the health and productivity of livestock, poultry and companion
              animals.
            </p>

            <p>
              Under the leadership of <strong> Veterinarian Dr. Manish Kumar Pandey</strong>,
              our company focuses on research, innovation, quality assurance
              and customer satisfaction while delivering reliable veterinary
              healthcare solutions across India.
            </p>

            <div className="about-features">

              <div>
                <FaCheckCircle />
                Quality Assured Products
              </div>

              <div>
                <FaCheckCircle />
                Research Driven Innovation
              </div>

              <div>
                <FaCheckCircle />
                Veterinary Expertise
              </div>

              <div>
                <FaCheckCircle />
                Customer-Centric Approach
              </div>

            </div>

          </div>

        </div>

      </section>
      <MissionVision/>

      <Footer />
    </>
  );
}

export default About;