import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Wave */}

      <div className="footer-wave">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container footer-grid">

        {/* ================= COMPANY ================= */}

        <div className="footer-col">

          <div className="footer-logo">

            <div className="footer-logo-circle">
              CP
            </div>

            <div>

              <h3>Chitravet Pharma</h3>

              <span>Private Limited</span>

            </div>

          </div>

          <p>
            Dedicated to developing innovative,
            safe and research-driven veterinary
            pharmaceutical solutions for livestock,
            poultry and companion animals.
          </p>

          <div className="social-icons">

            <a href="https://www.facebook.com/people/Chitravet-Pharm-PvtLtd/pfbid0JEXxXoKXpamMB24g2fQnTasbJbSmHtHHSum1LjP8yLdQoprzvfda5boDHqDWacHgl/?rdid=zbJe9eo1uPw6sU0n&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1PpSzBSSrW%2F">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/chitravetpharma">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/chitravet-pharma-private-limited-313793396/">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* ================= QUICK LINKS ================= */}

        <div className="footer-col">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/director">Director</Link>

          <Link to="/products">Products</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* ================= CONTACT ================= */}

        <div className="footer-col">

          <h4>Contact Info</h4>

          <p>
            <FaMapMarkerAlt />
            Indira Nagar,
            Kalyan City,
            Thane,
            Maharashtra
          </p>

          <p>
            <FaPhoneAlt />
            +91 9559521107
          </p>

          <p>
            <FaEnvelope />
            chitravetpharma@gmail.com
          </p>

          <p>
            <strong>CIN</strong>
            <br />
            U47720MH2025PTC438829
          </p>

        </div>

      </div>

      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <div className="container footer-bottom-container">

          <div className="footer-bottom-left">

            © 2026 Chitravet Pharma Private Limited.
            All Rights Reserved.

          </div>

          <div className="footer-bottom-right">

            Developed By
            <span> Abhinav Upadhyay ❤️</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;