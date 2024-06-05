import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function SignupForm() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const [isDoctor, setIsDoctor] = useState(false); // Track whether user is a doctor or a patient
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form inputs
        const errors = {};
        if (!firstName.trim()) {
            errors.firstName = "First name is required";
        }
        if (!lastName.trim()) {
            errors.lastName = "Last name is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        }
        if (!password.trim()) {
            errors.password = "Password is required";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Reset form fields and errors after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setFormErrors({});

        toast.success("Account created successfully!", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsSubmitted(true),
            onClose: () => setIsSubmitted(false),
        });
    };

    return (
        <div className="appointment-form-section">
            <h1 className="legal-siteTitle">
                <Link to="/">
                    Therapedia <span className="legal-siteSign">+</span>
                </Link>
            </h1>

            <div className="form-container">
                <h2 className="form-title">
                    <span>{isDoctor ? "Doctor Sign Up" : "Patient Sign Up"}</span>
                </h2>

                <form className="form-content" onSubmit={handleSubmit}>
                    <label>
                        Are you a doctor or a patient?
                        <select
                            value={isDoctor ? "doctor" : "patient"}
                            onChange={(e) => setIsDoctor(e.target.value === "doctor")}
                            required
                        >
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </label>
                    <br />

                    <label>
                        First Name:
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        {formErrors.firstName && (
                            <p className="error-message">{formErrors.firstName}</p>
                        )}
                    </label>
                    <br />

                    <label>
                        Last Name:
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        {formErrors.lastName && (
                            <p className="error-message">{formErrors.lastName}</p>
                        )}
                    </label>
                    <br />

                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {formErrors.email && (
                            <p className="error-message">{formErrors.email}</p>
                        )}
                    </label>
                    <br />

                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {formErrors.password && (
                            <p className="error-message">{formErrors.password}</p>
                        )}
                    </label>
                    <br />

                    <button type="submit" className="text-appointment-btn">
                        Sign Up
                    </button>

                    <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
                        Account created successfully!
                    </p>
                </form>
                <div>
                    <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                </div>
            </div>
            <div className="legal-footer">
                <p>© 2024 Therapedia. All rights reserved.</p>
            </div>
            <ToastContainer autoClose={5000} limit={1} closeButton={false} />
        </div>
    );
}

export default SignupForm;
