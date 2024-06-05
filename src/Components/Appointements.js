import React, { useRef, useState } from "react";
import "../Styles/Appointements.css";

function Appointments() {
  const card1Ref = useRef(null);
  const titleRef = useRef(null);
  const specialityboxRef = useRef(null);
  const educationboxRef = useRef(null);
  const bookRef = useRef(null);
  
  const [showConfirm, setShowConfirm] = useState(false);

  const handleBookClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    // Handle booking confirmation logic here
    setShowConfirm(false);
    // You can add more logic here, such as sending booking request to server, etc.
  };

  return (
    <div className="card1" ref={card1Ref}>
      <div className="column">
        <h1 className="title" ref={titleRef}>
          Doctor Anis Koubaa
        </h1>
        <ul className="speciality-box" ref={specialityboxRef}>
          <li> Pediatrics</li>
        </ul>
        <ul className="education-box" ref={educationboxRef}>
          <li>
            <strong>15 Juin 2024</strong>
            <br />
            10:30 AM
          </li>
        </ul>
        <div className="button-box" ref={bookRef}>
          <button className="book" onClick={handleBookClick}>
            Book
          </button>
        </div>
      </div>
      {showConfirm && (
        <div className="popup">
          <p>Confirm booking?</p>
          <button onClick={handleConfirm}>Yes</button>
        </div>
      )}
    </div>
  );
}

export default Appointments;
