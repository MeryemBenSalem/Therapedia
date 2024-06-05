import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SignUpPopUp from "./SignUpPopUp"; // Import the SignupPop component
import "../Styles/Navbar.css";
import logo from '../assets/logo.png';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="navbar-section">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Therapedia Logo" className="logo" />
        </Link>
      </div>

      <div className="navbar-right">
        {/* Sign In/Sign Up Button */}
        <button className="navbar-btn" onClick={openModal}>
          <FontAwesomeIcon icon={faUserCircle} /> Sign Up
        </button>

        {/* Desktop Navigation */}
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
      </div>

      {/* Render the SignUpPopUp */}
      <SignUpPopUp trigger={showModal} setTrigger={setShowModal} />
    </div>
  );
}

export default Navbar;
