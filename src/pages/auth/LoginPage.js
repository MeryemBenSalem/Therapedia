import React, { Component } from "react";
import "../../assets/css/login.css";
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import axios from 'axios';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false,
            errorMessage: ""
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            error: false,
            errorMessage: ""
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            const response = await axios.post('http://localhost:9090/admin/signin', { email, password }, {
                withCredentials: true // Ensure credentials are sent with the request
            });
            if (response.status === 200) {
                // Successful login, redirect to dashboard or set session
                console.log("Login successful");
                // Example: redirect to dashboard
                window.location.href = 'http://localhost:3000/dashboard';
            } else {
                // Handle other status codes or errors
                this.setState({ error: true, errorMessage: "Invalid email or password. Please try again." });
            }
        } catch (error) {
            console.error("Error during login:", error);
            this.setState({ error: true, errorMessage: "Invalid email or password. Please try again." });
        }
    }

    render() {
        const { email, password, error, errorMessage } = this.state;

        return (
            <>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="d-flex align-items-center my-4">
                        <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                        <input
                            type="email"
                            id="form3Example3"
                            className="form-control form-control-lg"
                            placeholder="Enter a valid email address"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                        <input
                            type="password"
                            id="form3Example4"
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>

                    {error && <p className="text-danger">{errorMessage}</p>}

                    <div className="text-center text-lg-start mt-4 pt-2">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </div>
                </form>
            </>
        );
    }
}

export default authLayout(LoginPage);
