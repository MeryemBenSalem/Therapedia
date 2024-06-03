import React from "react";
import Doctor from "../assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/WhyChooseUs.css";

function WhyChooseUs() {
  const navigate = useNavigate();

  const handleWhyChooseUsClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Therapedia</span>
        </h3>
        <p className="ba-description">
        Discover the reasons to choose Therapedia for your mental health needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#68283D" }} /> Best Professional Doctors
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#68283D" }} /> Emergency Care
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#68283D" }} /> 24/7 Support 
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#68283D" }} /> Enrollment Easy and Quick
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleWhyChooseUsClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default WhyChooseUs;
