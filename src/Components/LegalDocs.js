import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";
import logo2 from '../assets/logo2.png'; 


function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
      <img src={logo2} alt="Therapedia Logo" className="logo" />
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Therapedia, your trusted online platform for psychology and mental health 
        services. Our mission is to provide accessible and personalized mental health care to 
        individuals seeking expert advice and support. By using our platform, you agree to the 
        terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Your Privacy Matters</p>
        <p className="legal-description">
        Your privacy is paramount to us. At Therapedia, we understand the importance of 
        safeguarding your personal and sensitive information. Our Privacy Policy outlines how 
        we collect, use, and protect your data. We ensure secure data handling practices, 
        and you can trust that your information is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        When using Therapedia, you agree to our Terms of Service. This includes guidelines for 
        using our platform, interacting with therapists and doctors, and the responsibilities 
        of both parties. It's essential to understand these terms to ensure a smooth experience 
        for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Our platform connects you with expert therapists and doctors who provide online 
        consultations. These consultations offer a convenient option for mental health 
        advice, counseling, and support. While our services are valuable, they are not a 
        substitute for in-person therapy or emergency medical care. It's crucial to provide 
        accurate and honest information to receive the best possible support.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Therapedia is designed to simplify access to mental health care. You can choose a 
        therapist or doctor, schedule an appointment, and engage in a virtual consultation. 
        Our professionals offer personalized advice and treatment plans tailored to your 
        mental health needs. Please remember that in case of emergencies, immediate medical 
        attention should be sought from your local healthcare provider or emergency services.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 Therapedia. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;