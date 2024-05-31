import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import logo2 from '../assets/logo2.png'; 
import terms from '../assets/terms&conditions.pdf';  


function Footer() {
  return (
    <div class="footer-section"  >
      
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-description back">
              <div className="image back">
            <img src={logo2} alt="Therapedia Logo" className="logo" />
            </div >
              Connect with mental health professionals and access a range of therapeutic services 
              tailored to your needs. Our platform offers confidential counseling sessions, 
              psychiatric evaluations, and online therapy sessions to support your mental 
              well-being.
            </p>
          </div>

          
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Psychological Counseling</a>
            </li>
            <li>
              <a href="#services">Online Therapy Sessions</a>
              
            </li>
            <li>
              <a href="#bookappointment">Forum Discussion</a>
            </li>
            <li>
              <a href="#services">Journaling</a>
            </li>
            <li>
              <a href="#services">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
            <a href={terms} target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
            </li>
            
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Contact Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@therapedia.com">support@therapedia.com</a>
            </li>
            <li>
              <a href="tel:+21675366677">(+216) 75 366 677</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 Therapedia. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
