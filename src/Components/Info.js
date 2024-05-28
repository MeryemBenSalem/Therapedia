import React from "react";
import InformationCard from "./InformationCard";
import { faBrain, faUserMd, faComments } from '@fortawesome/free-solid-svg-icons';

import "../Styles/Info.css";

function Info() {
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
          title="Psychological Counseling"
          description="Our licensed therapists provide individualized counseling sessions to help you address a variety of mental health concerns, including anxiety, depression, trauma, and relationship issues. Through compassionate listening and evidence-based interventions, we empower you to navigate life's challenges and cultivate emotional resilience."
          icon={faBrain}
        />

        <InformationCard
          title="Psychiatric Evaluation"
          description="Our board-certified psychiatrists offer comprehensive psychiatric evaluations and medication management services. Whether you're seeking diagnosis and treatment for a mental health condition or require ongoing medication management, our team is here to provide personalized care and support."
          icon={faUserMd}
        />

        <InformationCard
          title="Online Therapy Sessions"
          description="Access therapy from the comfort of your own home with our convenient online therapy sessions. Our secure and confidential platform allows you to connect with licensed therapists via video or phone sessions, making mental health care accessible and convenient for all."
          icon={faComments}
        />
      </div>
      

    </div>
  );
}
export default Info;
