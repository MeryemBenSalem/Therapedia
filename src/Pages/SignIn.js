import React, { useState } from 'react';
import '../Styles/sign_in.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        // Handle form submission here
        console.log(formData);
    };

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

export default SignIn;
