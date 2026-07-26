import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="topbar">

        <div className="container topbar-container">

          <div className="top-left">

            <span>
              <FaPhoneAlt />
              +91 9559521107
            </span>

            <span>
              <FaEnvelope />
              chitravetpharma@gmail.com
            </span>

          </div>

          <div className="top-right">
            Veterinary Pharmaceutical Company
          </div>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}

      <header className={sticky ? "navbar sticky" : "navbar"}>

        <div className="container navbar-container">

          {/* LOGO */}

          <NavLink to="/" className="logo" onClick={closeMenu}>


          <div className="logo-circle">
            <img src={logo} alt="Chitravet Pharma Logo" />
             </div>  

            <div className="logo-content">

              <h2>Chitravet Pharma</h2>

              <p>Animal Healthcare Solutions</p>

            </div>

          </NavLink>

          {/* MENU */}

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>

            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/director" onClick={closeMenu}>
              Director
            </NavLink>

            <NavLink to="/products" onClick={closeMenu}>
              Products
            </NavLink>

            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

          </nav>

          {/* CTA */}

          <NavLink
            to="/contact"
            className="contact-button"
          >
            Contact Us
          </NavLink>

          {/* MOBILE ICON */}

          <div
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </header>
    </>
  );
}

export default Navbar;