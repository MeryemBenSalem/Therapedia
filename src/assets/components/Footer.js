import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import logo2 from '../Assets/logo2.png'; 

function Footer() {
  return (
    <div className="footer-section">
      
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-description">
              <div className="image">
            <img src={logo2} alt="Therapedia Logo" className="logo" />
            </div>
              Connect with mental health professionals and access a range of therapeutic services tailored to your needs. Our platform offers confidential counseling sessions, psychiatric evaluations, and online therapy sessions to support your mental well-being.
            </p>
          </div>

          <SubscribeNewsletter />
          
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Psychological Counseling</a>
            </li>
            <li>
              <a href="#services">Journaling</a>
            </li>
            <li>
              <a href="#services">Online Therapy Sessions</a>
            </li>
            <li>
              <a href="#services">Forum Discussion</a>
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
              <Link to={"/legal"}>Terms of Service</Link>
            </li>
            <li>
              <Link to={"/legal"}>Disclaimer</Link>
            </li>
            <li>
              <Link to={"/legal"}>Accessibility Statement</Link>
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
              <a href="tel:+1234567890">+1 (234) 567-890</a>
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
