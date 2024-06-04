import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import SignUpPopUp from "./SignUpPopUp";
import { Link } from "react-router-dom";
import logo from '../Assets/logo .png';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false); // Define state variables

  const openNav = () => {
    setNav(!nav);
  };


  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="navbar-section">
      <div className="navbar-left navbar-btn-container">
        {/* Sign In/Sign Up Button */}
      <button className="navbar-btn" onClick={() => setButtonPopup(true)}>
        <FontAwesomeIcon icon={faUserCircle} /> Sign Up
      </button>
      <SignUpPopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
      </div>

      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Therapedia Logo" className="logo navbar-sign" />
        </div>
      </Link>

      {/* Desktop */}
      <div className="itt">
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

      
      </div>

      {/* Render the SignupPop */}
      <SignUpPopUp show={showModal} onClose={closeModal} />
    </div>
  );
}

export default Navbar;
