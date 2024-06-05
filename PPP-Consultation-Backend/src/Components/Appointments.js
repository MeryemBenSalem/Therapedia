import React, { useRef, useState } from "react";
import "../Styles/Appointements.css";

function Appointments({ appointment }) {
  const card1Ref = useRef(null);
  const titleRef = useRef(null);
  const educationboxRef = useRef(null);
  const bookRef = useRef(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [reservationStatus, setReservationStatus] = useState(null);

  const handleBookClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch(`http://localhost:8080/consultation/reserve/${appointment.consultationId}/patient/1`, {
        method: 'PUT',
      });
      const result = await response.text();
      if (response.ok) {
        setReservationStatus("Reservation successful");
      } else {
        setReservationStatus(`Reservation failed: ${result}`);
      }
    } catch (error) {
      setReservationStatus(`Reservation failed: ${error.message}`);
    }
    setShowConfirm(false);
  };

  console.log('Appointment data:', appointment); // Ajoutez ceci pour vérifier les données

  return (
      <div className="card1" ref={card1Ref}>
        <div className="column">
          <h1 className="title" ref={titleRef}>
            {appointment.doctor.doctorName}
          </h1>
          <ul className="education-box" ref={educationboxRef}>
            <li>
              <strong>{new Date(appointment.consultationTime).toLocaleDateString()}</strong>
              <br />
              {new Date(appointment.consultationTime).toLocaleTimeString()}
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
              <button onClick={() => setShowConfirm(false)}>No</button>
            </div>
        )}
        {reservationStatus && <p>{reservationStatus}</p>}
      </div>
  );
}

export default Appointments;
