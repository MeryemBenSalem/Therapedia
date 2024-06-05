import React, { useRef } from "react";
import "../Styles/CardPatient.css";
import img6141 from "../assets/IMG_6141.JPG";

export default function Card({ patient }) {
    const cardRef = useRef(null);

    return (
        <div className="container">
            <div className="cardPatient" ref={cardRef}>
                <div className="column1">
                    <img
                        src={img6141} 
                        alt={patient.name}
                    />
                </div>
                <div className="column2">
                    <h1 className="title">
                        {patient.name}
                    </h1>
                    <ul className="dateofConsultation-box">
                        <li>
                            <strong>date of Consultation:</strong>
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
