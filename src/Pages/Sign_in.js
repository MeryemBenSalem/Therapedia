import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/sign_in.css';
import logo from '../Assets/logo2.png';


const Sign_in = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

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
            const response = await axios.post('http://localhost:8080/profile/login', formData);
            if (response.status === 200) {
                // Store token in localStorage
                const token = response.data.token;
                console.log('Token:', token); // Log the token
                localStorage.setItem('token', token);
                // Redirect to home or another page on successful login
                navigate('/');
            } else {
                // Handle login failure
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            // Handle error
            alert('An error occurred. Please try again.');
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="container">

           

            <div className="sign-in-container">

                    <div className="logo-container">
                            <img src={logo} alt="Therapedia Logo" className="logo" />
                        </div>

                <h1>Welcome Back!</h1>
                <h2>Sign In to Your Account</h2>
                <form onSubmit={handleSubmit}>
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
                    </div>
                    <button type="submit" className="signINbutton">Sign In</button>
                </form>
                <p>
                    Don't have an account? <Link to="/sign_up">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Sign_in;
