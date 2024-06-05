// sign_up.js
import React, { useState } from 'react';
import styles from '../Styles/Sign_up.module.css'; 
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';  
import cond from '../assets/terms&conditions.pdf';  

const Sign_up = () => {
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
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Therapedia Logo" className={styles.logo} />
      </div>
      
      <div className={styles.signUpContainer}>
        <h1>Ready to get started?</h1>
        <h2>Create your Therapedia Account</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="👤  First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            /> 
            &nbsp; &nbsp;
            <input
              type="text"
              name="lastName"
              placeholder="👤  Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="📧  Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            /> 
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="🔒  Password"
              value={formData.password}
              onChange={handleChange}
              required
            /> 
            &nbsp; &nbsp;
            <input
              type="password"
              name="confirmPassword"
              placeholder="🔒  Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="number"
              name="phone"
              placeholder="📞  Phone Number"
              value={formData.phone}
              onChange={handleChange}
            /> 
            &nbsp; &nbsp;
            <input
              type="number"
              name="emergencyContact"
              placeholder="📞  Emergency Contact"
              value={formData.emergencyContact}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            &nbsp; &nbsp; 📅 Date of Birth:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <div className={styles.genderco}>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">🚻  Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer Not to Say</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="medicalHistory"
              placeholder="📝  Medical History"
              value={formData.medicalHistory}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="reasonForTherapy"
              placeholder="📝  Reason for Seeking Therapy"
              value={formData.reasonForTherapy}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.formGroup} style={{ display: 'flex', alignItems: 'center' }}>
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
          <button type="submit" className={styles.signUPbutton}>Sign Up</button>
        </form>
        <p>
                    Already have an account? <Link to="/sign_in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Sign_up;
