import React, { useState } from 'react';
import styles from '../Styles/Sign_up_doc.module.css'; 
import logo from '../assets/logo2.png';  
import cond from '../assets/terms&conditions.pdf';  
import { Link } from 'react-router-dom';


const Sign_up_doc = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    licenseNumber: '',
    specialization: '',
    yearsOfExperience: '',
    affiliations: '',
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
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Therapedia Logo" className={styles.logo} />
      </div>
      <div className={styles.signUpContainer}>
        <h1>Ready to get started?</h1>
        <h2>Join Therapedia & Make a Difference</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="👨🏻‍⚕️ First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="👨🏻‍⚕️ Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="📧 Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="🔒 Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="🔒 Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="📞 Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="licenseNumber"
              placeholder="🔢 License Number"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
            >
              <option value="">🎓 Specialization</option>
              <option value="clinicalPsychology">Clinical Psychology</option>
              <option value="psychiatry">Psychiatry</option>
              <option value="counseling">Counseling</option>
              <option value="other">Other</option>
            </select>
            <input
              type="number"
              name="yearsOfExperience"
              placeholder="💼 Years of Experience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="affiliations"
              placeholder="📝 Professional Affiliations"
              value={formData.affiliations}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={(e) =>
                setFormData(prevState => ({
                  ...prevState,
                  agreement: e.target.checked
                }))
              }
              required
            />
            <span>
              I agree to{' '}
              <a href={cond} target="_blank" rel="noopener noreferrer">
                the rules and conditions of Therapedia
              </a>
            </span>
          </div>
          <button type="submit" className={styles.DOCbutton}>Sign Up</button>
        </form>
        <p>
                    Already have an account? <Link to="/sign_in">Sign In</Link>
        </p>
        </div>
      
    </div>
  );
};

export default Sign_up_doc;