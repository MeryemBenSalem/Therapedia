
import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom';


createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Consultation from './Pages/consultation'; 
import SignUp from './Pages/sign_up'; 
import SignUpDoc from './Pages/sign_up_doc'; 
import Home from './Pages/Home'; 
import Appointment from './Pages/Appointment'; 
import sign_in from './Pages/Sign_in';
import Sign_in from "./Pages/Sign_in";
import {jwtDecode} from "jwt-decode";


function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role , setRole] = useState("")
  useEffect(() => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      console.log(decodedToken)
      if (decodedToken) {
        // Set the username in state
        setUsername(decodedToken.sub);
        setRole(decodedToken.role);
        setIsLoggedIn(true); // Set isLoggedIn to true if token exists
      }
    }
  }, []);
  const decodeToken = (token) => {
    try {
      // Decode the JWT token to get the payload
      // Return the decoded payload
      return jwtDecode(token);
    } catch (error) {
      // Handle decoding errors, if any
      console.error("Error decoding token:", error);
      return null;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_up_doc" element={<SignUpDoc />} />
        <Route path="/" element={<Home />} />
        <Route path="/Appointment" element={<Appointment />} />
          <Route path ="/sign_in" element={<Sign_in/>}/>
      </Routes>
    </Router>
  );
}



export default App;


