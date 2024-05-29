import React from "react";
import Navbar from "../Components/Navbar";
import BookAppointment from "../Components/BookAppointment";
import Services from "../Components/Services";
import About from "../Components/About";
import WhyChooseUs from "../Components/WhyChooseUs";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";




/*import Hero from "../Components/Hero";



      
      
      
*/

 

function Home() {
  return (
   
    <div className="home-section" style={{ backgroundColor: "#B0C4D3" }}>
      <Navbar />
      <BookAppointment />
      <Services />
      <About />
      <WhyChooseUs/>
      <Reviews />
      <Doctors />
      <Footer />



      
    </div>
  );
}

export default Home;
