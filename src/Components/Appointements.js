import React, { useRef } from "react";
import "../Styles/Appointements.css";

function Appointments() {
  const card1Ref = useRef(null);
  const titleRef = useRef(null);
  const specialityboxRef = useRef(null);
  const educationboxRef = useRef(null);
  const bookRef = useRef(null);

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
          <button className="book">Book </button>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
