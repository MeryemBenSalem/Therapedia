// sign_up.js
import React, { useState } from 'react';
import '../Styles/sign_up.css'; 
import logo from '../assets/logo.png';
import cond from '../assets/terms&conditions.pdf';
import { Link } from 'react-router-dom';



const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    emergencyContact: '',
    dateOfBirth: '',
    //nationality: '',
    gender: '',
    medicalHistory: '',
    reasonForTherapy: '',
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/patient/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful signup and session creation
        console.log("New user added");
        // Optionally store session info in local storage or state
        const sessionData = await response.json();
        localStorage.setItem('session', JSON.stringify(sessionData));

        // Redirect to the home page or another page
        history.push('/');
      } else {
        // Handle signup failure
        console.error('Signup failed');
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('There was an error!', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    
    <div className="sign-up-container">
        <div className="close-button-container">
    <Link to="/welcome" className="close-button">x</Link>
  </div>
      <div className="logo-container">
        <img src={logo} alt="Therapedia Logo" className="logo" />
      </div>

      <h1>Ready to get started ?</h1>
      <h2>Create your Therapedia Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        
          <input
            type="text"
            name="firstName"
            placeholder= " 👤  First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          /> &nbsp; &nbsp;
          <input
            type="text"
            name="lastName"
            placeholder=" 👤  Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder=" 📧  Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          /> 
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder=" 🔒  Password"
            value={formData.password}
            onChange={handleChange}
            required
          /> &nbsp; &nbsp;
          <input
            type="password"
            name="confirmPassword"
            placeholder=" 🔒  Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phone"
            placeholder=" 📞  Phone Number"
            value={formData.phone}
            onChange={handleChange}
          /> &nbsp; &nbsp;
          <input
            type="number"
            name="emergencyContact"
            placeholder=" 📞  Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📅 &nbsp; Date of Birth:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
        <div className="input-container">
  <div className='genderco'>
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    required
  >
    <option value=""> 🚻  Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="male">Non-Binary</option>
    <option value="other">Other</option>
    <option value="female">Prefer Not to Say</option>
  </select>
  </div>
</div>
        </div>
        <div className="form-group">
          <textarea
            name="medicalHistory"
            placeholder=" 📝  Medical History"
            value={formData.medicalHistory}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <textarea
            name="reasonForTherapy"
            placeholder=" 📝  Reason for Seeking Therapy"
            value={formData.reasonForTherapy}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
  <input
    type="checkbox"
    name="agreement"
    checked={formData.agreement}
    onChange={(e) => setFormData(prevState => ({ ...prevState, agreement: e.target.checked }))}
    required
  />
  <span style={{ marginLeft: '10px' }}>
    I agree to <a href={cond} target="_blank" rel="noopener noreferrer">the rules and conditions of Therapedia</a>
  </span>
</div>
        <button type="submit">Sign Up</button>
      
      </form>
    </div>
  );
};

export default SignUp;
