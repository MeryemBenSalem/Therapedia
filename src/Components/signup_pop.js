/* SignupPop.js */
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/signup_pop.css"; // Create and import a CSS file for the modal styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the icon you want to use


function SignupPop({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

      <div>
        <button className="modal-close-btn" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      
      
        <h2>Are you a doctor or a patient?</h2>
        <div className="modal-buttons">

          <Link to="/sign_up?role=patient" className="modal-btn" onClick={onClose}>
            Patient
          </Link>

          <Link to="/sign_up_doc?role=doctor" className="modal-btn" onClick={onClose}>
            Doctor
          </Link>

        </div>
        <hr className="modal-line" />
        <p className="modal-signin-text">Already have an account? <Link to="/sign_in">Sign in</Link></p>
        
      </div>
      
    </div>
  );
}

export default SignupPop;
