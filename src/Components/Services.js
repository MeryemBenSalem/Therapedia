import React from "react";
import InformationCard from "./InformationCard";
import { faBook, faComments, faNewspaper } from '@fortawesome/free-solid-svg-icons';


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
          title="Consult Blogs and Articles"
          description="Stay informed and empowered with our extensive collection of blogs and articles. Written by experts in the field, our content covers a wide range of mental health topics, offering insights, advice, and practical tips to help you manage your mental health and well-being. "
          icon={faNewspaper}
    
        />

        <InformationCard
          title="Discussion Forum"
          description="Join our vibrant discussion forum where doctors and patients share experiences, advice, and support. Engage in meaningful conversations, ask questions, and connect with others who understand your journey.
          Our community provides a safe and supportive space for sharing and learning, helping you feel less alone on your mental health journey."
          icon={faComments}
        />

<InformationCard
          title="Personal Journals"
          description="Express yourself through our personal journals feature, where you can write and manage your diaries. Journaling is a powerful tool for self-reflection and emotional processing. Our secure platform ensures that your thoughts and feelings remain private, allowing you to track your mental health journey and gain deeper insights into your emotions and experiences."
          icon={faBook}
        />
      </div>
      

    </div>
  );
}
export default Services;