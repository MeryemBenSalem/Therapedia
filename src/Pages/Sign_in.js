import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Sign_in = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/profile/login', formData);
            if (response.status === 200) {
                // Redirect to home or another page on successful login
                history.push('/');
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

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/profile/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.text();
            if (response.ok) {
                console.log(data);
                // Redirect to the home page or dashboard
                window.location.href = '/home';
            } else {
                console.log(data);
                // Show error message
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };*/


    return (
        <div className="container">
            <div className="sign-in-container">
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
                    <button type="submit">Sign In</button>
                </form>
                <p>
                    Don't have an account? <Link to="/sign_up">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Sign_in;
