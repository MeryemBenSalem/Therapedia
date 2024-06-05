import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import BookAppointment from "../Components/BookAppointment";
import Services from "../Components/Services";
import About from "../Components/About";
import WhyChooseUs from "../Components/WhyChooseUs";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import { jwtDecode } from "jwt-decode";

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
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


    return (
        <div className="home-section" style={{ backgroundColor: "#B0C4D3" }}>
            <Navbar isLoggedIn={isLoggedIn} />
            <BookAppointment />
            <Services />
            <About />
            <WhyChooseUs />
            <Reviews />
            <Doctors />
            <Footer />
        </div>
    );
}

export default Home;
