import React, { useState, useRef } from "react";
import "../Styles/Card.css";

export default function Card({ doctor }) {
    const [xRotation, setXRotation] = useState(0);
    const [yRotation, setYRotation] = useState(0);
    const cardRef = useRef(null);

    function handleMouseMove(event) {
        const card = cardRef.current;
        if (!card) return;

        const { offsetWidth: width, offsetHeight: height } = card;
        const { clientX, clientY } = event;
        const x = clientX - card.offsetLeft - width / 2;
        const y = clientY - card.offsetTop - height / 2;
        const mult = 40;
        setXRotation((y / height) * mult);
        setYRotation((x / width) * mult);
    }

    function resetTransformations() {
        setXRotation(0);
        setYRotation(0);
    }

    return (
        <div
            className="card"
            ref={cardRef}
            style={{
                transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseMove}
            onMouseLeave={resetTransformations}
        >
            <div className="column2">
                <h1 className="title">{`Dr. ${doctor.firstName} ${doctor.lastName}`}</h1>
                <ul className="speciality-box">
                    <li>{doctor.specialization}</li>
                </ul>
                <ul className="info-box">
                    <li><strong>License Number:</strong> {doctor.licenseNumber}</li>
                    <li><strong>Years of Experience:</strong> {doctor.yearsOfExperience}</li>
                    <li><strong>Affiliations:</strong> {doctor.affiliations}</li>
                </ul>
                <div className="button-box">
                    <button className="book">
                        <a href={`/Doctors/${doctor.id}`}>Book an Appointment</a>
                    </button>
                </div>
            </div>
        </div>
    );
}