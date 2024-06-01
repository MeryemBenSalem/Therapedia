import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../assets/Aziza.jpg";
import profile2 from "../assets/Baryoucha.jpg";
import profile3 from "../assets/Arij.jpg";
import profile4 from "../assets/Skan.jpg";
import profile5 from "../assets/loulou.jpg";

import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. <br></br>
          Trust in their knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Aziza NAGARA"
          title="Cognitive Behavioral Therapy (CBT)"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Amine BARYOUCHA"
          title="Family and Marriage Therapy"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Arij AGUEL"
          title="Trauma and PTSD Therapy"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Skander GRITLI"
          title="Addiction Counseling"
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile5}
          name="Dr. Meryem BEN SALEM"
          title="Child and Adolescent Therapy"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;