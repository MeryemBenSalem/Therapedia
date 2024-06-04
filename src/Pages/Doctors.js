import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
function Doctors() {
    return (
    <div className="home-section">
        <Navbar />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Footer />
    </div>
  );
}

export default Doctors;