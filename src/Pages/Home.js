import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import BookAppointment from "../Components/BookAppointment";
import Footer from "../Components/Footer";


 

function Home() {
  return (
   
    <div className="home-section" style={{ backgroundColor: "#B0C4D3" }}>
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
