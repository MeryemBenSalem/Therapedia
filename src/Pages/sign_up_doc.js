// sign_up.js
import React, { useState } from 'react';
import '../Styles/sign_up_doc.css'; 
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
    nationality: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
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
      <h2>Join Therapedia & Make a Difference </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        
          <input
            type="text"
            name="firstName"
            placeholder= " 👨🏻‍⚕️  First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          /> &nbsp; &nbsp;
          <input
            type="text"
            name="lastName"
            placeholder=" 👨🏻‍⚕️  Last Name"
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
            style={{ width: '540px' }} 
          /> &nbsp; &nbsp;
          <div className='license'>
          <input
            type="number"
            name="license"
            placeholder=" 🔢  License Number"
            value={formData.licenseNumber}
            onChange={handleChange}
            style={{ width: '540px' }} 
          /> </div>
        </div>
        <div className="form-group">
        <div className="input-container">
  <div className='specialization'>
  <select
    name="specialization"
    value={formData.specialization}
    onChange={handleChange}
    required
  >
    <option value=""> 🎓  specialization</option>
    <option value="male">Clinical Psychology</option>
    <option value="female">Psychiatry</option>
    <option value="male">Counseling</option>
    <option value="other">Other</option>
  </select>
  </div>
  <div>
  <input
            type="number"
            name="yearsOfExperience"
            placeholder=" 💼  Years of Experience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
          />
          </div>
</div>
        </div>
        <div className="form-group">
          <textarea
            name="Affiliations"
            placeholder=" 📝  Professional Affiliations"
            value={formData.Affiliations}
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
