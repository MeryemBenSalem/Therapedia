import React, { useRef } from "react";
import "../Styles/Card.css";
import img6141 from "../assets/IMG_6141.JPG";

export default function Card({ patient }) {
    const cardRef = useRef(null);

    return (
        <div className="container">
            <div className="card" ref={cardRef}>
                <div className="column1">
                    <img
                        src={img6141} // Utiliser l'image importée
                        alt={patient.name}
                        className="doctor-img"
                    />
                </div>
                <div className="column2">
                    <h1 className="title">
                        {patient.name}
                    </h1>
                    <ul className="dateofConsultation-box">
                        <li>
                            <strong>dateofConsultation:</strong>
                            <br />
                            {patient.dateofConsultation}
                        </li>
                    </ul>
                    <ul className="education-box">
                        <li>
                            <strong>Education:</strong>
                            <br />
                            {patient.education.map((edu, index) => (
                                <span key={index}>{edu}<br /></span>
                            ))}
                        </li>
                    </ul>
                    <ul className="residency-box">
                        <li>
                            <strong>Residency:</strong>
                            <br />
                            {patient.residency}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
