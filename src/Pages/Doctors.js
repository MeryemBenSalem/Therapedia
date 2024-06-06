// Doctors.js
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import {jwtDecode} from "jwt-decode";

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                console.log(decodedToken)
                setIsLoggedIn(true); // Set isLoggedIn to true if token exists
            }
        }
    }, []);

    const decodeToken = (token) => {
        try {
            // Decode the JWT token to get the payload
            // Return the decoded payload
            return jwtDecode(token);
        } catch (error) {
            // Handle decoding errors, if any
            console.error("Error decoding token:", error);
            return null;
        }
    };
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
            <Navbar isLoggedIn={isLoggedIn} />
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