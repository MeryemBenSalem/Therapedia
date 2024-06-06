import React, { useRef } from "react";
import "../Styles/CardPatient.css";
import img6141 from "../Assets/IMG_6141.JPG";

export default function Card({ patient }) {
    const cardRef = useRef(null);

    return (
        <div className="container">
            <div className="cardPatient" ref={cardRef}>

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

                </div>
            </div>
        </div>
    );
}
