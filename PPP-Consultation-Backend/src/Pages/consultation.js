import React, { useState } from 'react';
import '../Styles/consultation.css';

function Consultation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}, Day: ${selectedDay}, Time: ${selectedTime}`);
  };

  return (
    <div className="consultation-container" style={{ backgroundColor: '#D1B3BC' }}>
      <h2 style={{ color: 'darkpink' }}>Request a Consultation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="👤 Your Name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="📧 Your Email"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="💬 Your Message"
        ></textarea>
        <label htmlFor="day">Select Day:</label>
        <select
          id="day"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          required
        >
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
        <label htmlFor="time">Select Time:</label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          <option value="">Select Time</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Consultation;
