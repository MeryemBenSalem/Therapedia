// Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SignupPop from "./signup_pop"; // Import the SignupPop component
import "../Styles/Navbar.css";
import logo from '../assets/logo.png';


function Navbar() {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="navbar-section">
      <div className="navbar-left navbar-btn-container">
        {/* Sign In/Sign Up Button */}
        <button className="navbar-btn" onClick={openModal}>
          <FontAwesomeIcon icon={faUserCircle} /> Sign Up
        </button>
      </div>

      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Therapedia Logo" className="logo navbar-sign" />
        </div>
      </Link>

      {/* Desktop */}
      <div className="itt" >
      <ul className="navbar-items">
      
        <li>
          <a href="#doctors" className="navbar-links">
            Our Doctors
          </a>
        </li>

        <li>
          <Link to="/blogs" className="navbar-links">
          Blogs & Articles
          </Link>
        </li>
        <li>
        <Link to="/forum" className="navbar-links">
          Discussion Forum
          </Link>
        </li>
        <li>
        <Link to="/journaling" className="navbar-links">
          Journaling
          </Link>
        </li>
      </ul>
      </div>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>

      {/* Render the SignupPop */}
      <SignupPop show={showModal} onClose={closeModal} />
    </div>
  );
}

export default Navbar;
