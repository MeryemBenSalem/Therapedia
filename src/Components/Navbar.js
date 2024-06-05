import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SignupPop from "./signup_pop"; // Import the SignupPop component
import "../Styles/Navbar.css";
import logo from '../assets/logo.png';

function Navbar({ isLoggedIn }) {
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Refresh the page
    window.location.reload();
  };

  return (
      <div className="navbar-section">
        <div className="navbar-left navbar-btn-container">
          {/* Render Logout button if logged in, otherwise render Sign Up button */}
          {isLoggedIn ? (
              <button className="navbar-btn" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </button>
          ) : (
              <button className="navbar-btn" onClick={openModal}>
                <FontAwesomeIcon icon={faUserCircle} /> Sign Up
              </button>
          )}
        </div>

        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="Therapedia Logo" className="logo navbar-sign" />
          </div>
        </Link>

        {/* Desktop */}
        <ul className="navbar-items">
          {/* Add other navbar items here */}
        </ul>

        {/* Mobile */}
        {/* Add mobile navigation here */}

        {/* Hamburger Icon */}
        {/* Add hamburger icon here */}

        {/* Render the SignupPop */}
        <SignupPop show={showModal} onClose={closeModal} />
      </div>
  );
}

export default Navbar;
