import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign_Up_Doc from './Pages/sign_up_doc';
import SignUp from './Pages/sign_up';
import Home from './Pages/Home'; 
import Sign_in from './Pages/Sign_in';
import {jwtDecode} from "jwt-decode";
import Legal from './Pages/Legal';
import {useEffect, useState} from "react";








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
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_up_doc" element={<Sign_Up_Doc />} />
        <Route path="/" element={<Home />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/Sign_in" element={<Sign_in />} />
      </Routes>
    </Router>
  );
}



export default App;


