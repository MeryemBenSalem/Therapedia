import React, {useEffect, useState} from "react";
import Journal from "../Components/Journal";
import Navbar from "../Components/Navbar";
import {jwtDecode} from "jwt-decode";
import Footer from "../Components/Footer";


function JournalPage() {
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
        }};


    return (
            <div className="home-section">
                <Navbar isLoggedIn={isLoggedIn}/>
                <Journal />
                <Footer/>
            </div>
          );
}

export default JournalPage;