import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
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
    Affiliations: '',
    specialization: '',
    licenseNumber: '',
    yearsOfExperience: '',
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
      const response = await fetch("http://localhost:8080/doctor/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("New user added");

        // Redirect to the home page
        window.location='http://localhost:3000/';
      } else {
        console.error('Signup failed');
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('An error occurred. Please try again.');
    }
  };


  return (
      <div className="container">
        <div className="logoContainer">
          <img src={logo} alt="Therapedia Logo" className="logo" />
        </div>
        <h1>Ready to get started ?</h1>
        <h2>Join Therapedia & Make a Difference </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
                type="text"
                name="firstName"
                placeholder="👨🏻‍⚕️ First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            &nbsp; &nbsp;
            <input
                type="text"
                name="lastName"
                placeholder="👨🏻‍⚕️ Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <input
                type="email"
                name="email"
                placeholder="📧 Email Address"
                value={formData.email}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <input
                type="password"
                name="password"
                placeholder="🔒 Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            &nbsp; &nbsp;
            <input
                type="password"
                name="confirmPassword"
                placeholder="🔒 Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <input
                type="number"
                name="phone"
                placeholder="📞 Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={{ width: '540px' }}
            />
            &nbsp; &nbsp;
            <div className="license">
              <input
                  type="number"
                  name="licenseNumber"
                  placeholder="🔢 License Number"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  style={{ width: '540px' }}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <div className="specialization">
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
              </div>
              <input
                  type="number"
                  name="yearsOfExperience"
                  placeholder="💼 Years of Experience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
          <textarea
              name="affiliations"
              placeholder="📝 Professional Affiliations"
              value={formData.affiliations}
              onChange={handleChange}
          ></textarea>
          </div>
          <div className="form-group">
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
          <button type="submit" className="DOCbutton">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/sign_in">Sign In</Link>
        </p>
      </div>
  );
};

export default Sign_up_doc;
