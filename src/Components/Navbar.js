import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from '../Assets/logo2.png'; 

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
      <div className="navbar-section">
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="Therapedia Logo" className="logo navbar-sign" />
            </div>
          </Link>
      

        

        {/* Desktop */}
        <ul className="navbar-items">
          <li>
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li>
            <a href="#services" className="navbar-links">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-links">
              About
            </a>
          </li>
          <li>
            <a href="#reviews" className="navbar-links">
              Reviews
            </a>
          </li>
          <li>
            <a href="#doctors" className="navbar-links">
              Our Doctors
            </a>
          </li>
        </ul>

        {/* Sign In/Sign Up Button */}
        <Link to="/signup" className="navbar-btn">
          <FontAwesomeIcon icon={faUserCircle} /> Sign Up
        </Link>

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
      </div>
  );
}

export default Navbar;
