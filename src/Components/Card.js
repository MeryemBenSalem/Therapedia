import React, { useState, useRef } from "react";
import "../Styles/Card.css";

export default function Card() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const specialityboxRef = useRef(null);
  const educationboxRef = useRef(null);
  const residencyboxRef = useRef(null);
  const bookRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseEnter() {
    const img = imgRef.current;
    const title = titleRef.current;
    const specialityBox = specialityboxRef.current;
    const educationBox = educationboxRef.current;
    const residencyBox = residencyboxRef.current;
    const book = bookRef.current;
    title.style.transform = "translateZ(150px)";
    img.style.transform = "translateZ(100px) rotateZ(-45deg)";
    specialityBox.style.transform = "translateZ(100px)";
    educationBox.style.transform = "translateZ(100px)";
    residencyBox.style.transform = "translateZ(100px)";
    book.style.transform = "translateZ(75px)";
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img = imgRef.current;
    const title = titleRef.current;
    const specialityBox = specialityboxRef.current;
    const educationBox = educationboxRef.current;
    const residencyBox = residencyboxRef.current;
    const book = bookRef.current;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    specialityBox.style.transform = "translateZ(0px)";
    educationBox.style.transform = "translateZ(0px)";
    residencyBox.style.transform = "translateZ(0px)";
    book.style.transform = "translateZ(0px)";
  }

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="column1">
        <img
          ref={imgRef}
          src={require("../Assets/47516338_b7e0_2.png")}
          alt="doctor anis koubaa"
          className="doctor-img"
        />
      </div>
      <div className="column2">
        <h1 className="title" ref={titleRef}>
          Doctor Anis Koubaa
        </h1>
        <ul className="speciality-box" ref={specialityboxRef}>
          <li> Pediatrics</li>
        </ul>
        <ul className="education-box" ref={educationboxRef}>
          <li>
            <strong>Education:</strong>
            <br />
            - Bachelor of Science in Biology, University of California, Los Angeles
            <br />
            - Doctor of Medicine (MD), Stanford University School of Medicine
          </li>
        </ul>
        <ul className="residency-box" ref={residencyboxRef}>
          <li>
            <strong>Residency:</strong>
            <br />
            - Pediatrics Residency, Stanford Children's Hospital
          </li>
        </ul>
        
        <div className="button-box" ref={bookRef}>
          <button className="book" >
           <a href="/Therapedia/Doctors/id"> Book an Appointment</a>
          </button>
        </div>
      </div>
    </div>
  );
  
  
}
