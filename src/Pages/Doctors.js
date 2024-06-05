// Doctors.js
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

function Doctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch("http://localhost:8080/doctor/getAll");
                if (!response.ok) {
                    throw new Error("Failed to fetch doctors");
                }
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        fetchDoctors();

    }, []);

    return (
        <div className="home-section">
            <Navbar />
            <div className="doctors-list">
                {doctors.map((doctor) => (
                    <Card
                        key={doctor.id}
                        doctor={doctor} // Pass the entire doctor object as prop
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Doctors;