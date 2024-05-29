import React from "react";
import InformationCard from "./InformationCard";
import { faBrain, faUserMd, faComments } from '@fortawesome/free-solid-svg-icons';

import "../Styles/Services.css";

function Services() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Services</span>
        </h3>
        <p className="info-description">
          At Therapedia, we offer a range of mental health services designed to support your well-being and personal growth. Our team of experienced professionals is dedicated to providing compassionate care and evidence-based treatments tailored to your individual needs.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Online Therapy Sessions"
          description="Our licensed therapists provide individualized counseling sessions to help you address a variety of mental health concerns, including anxiety, depression, trauma, and relationship issues. Access therapy from the comfort of your own home with our convenient online therapy sessions. Our secure and confidential platform allows you to connect with licensed therapists via video or phone sessions, making mental health care accessible and convenient for all."
          icon={faBrain}
        />

        <InformationCard
          title="Consult Blogs and Articles"
          description="Stay informed and empowered with our extensive collection of blogs and articles. Written by experts in the field, our content covers a wide range of mental health topics, offering insights, advice, and practical tips to help you manage your mental health and well-being. Whether you're looking for strategies to cope with stress, information on mental health conditions, or ways to improve your emotional resilience, our resources are here to guide you."
          icon={faUserMd}
        />

        <InformationCard
          title="Discussion Forum"
          description="Join our vibrant discussion forum where doctors and patients share experiences, advice, and support. Engage in meaningful conversations, ask questions, and connect with others who understand your journey. Our community provides a safe and supportive space for sharing and learning, helping you feel less alone and more empowered on your mental health journey."
          icon={faComments}
        />
      </div>
      

    </div>
  );
}
export default Services;
