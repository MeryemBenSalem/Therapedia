import Sign_Up_Doc from './Pages/sign_up_doc';
import SignUp from './Pages/sign_up';
import Home from './Pages/Home';
import Sign_in from './Pages/Sign_in';
import {jwtDecode} from "jwt-decode";
import Legal from './Pages/Legal';
import {useEffect, useState} from "react";
import React from "react";
import "./App.css";
import JournalPage from "./Pages/JournalPage";
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/auth/LoginPage';
import ResetPassword from './Pages/auth/ResetPassword';
import ProfilePage from './Pages/profile/ProfilePage';
import ChangePasswordPage from './Pages/profile/ChangePasswordPage';
import UserPreferencesPage from './Pages/profile/UserPreferencesPage';
import UserManagement from './Pages/UserManagement';
import TherapistManagement from './Pages/TherapistManagement';
import ContentManagement from './Pages/ContentManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./Pages/NotFound";
import Doctors from "./Pages/Doctors";
import Doctor_Description from "./Pages/Doctor_Description";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Consultation from "./Pages/Consultation";
import ForumPage from "./Pages/ForumPage";
import appointment from "./Pages/Consultation"
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
        setIsLoggedIn(true);
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
      <div className="App">

          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/forum" element={<ForumPage/>}/>
              <Route path="/sign_up" element={<SignUp />} />
              <Route path="/sign_up_doc" element={<Sign_Up_Doc />} />
              <Route path="/" element={<Home />} />
              <Route path="/Legal" element={<Legal />} />
              <Route path="/Sign_in" element={<Sign_in />} />
              <Route exact path='/dashboard' element={<DashboardPage />} />
              <Route exact path='/login' element={<LoginPage />} />
              <Route exact path='/reset-password' element={<ResetPassword />} />
              <Route exact path='/profile' element={<ProfilePage />} />
              <Route exact path='/change-password' element={<ChangePasswordPage />} />
              <Route exact path='/preferences' element={<UserPreferencesPage />} />
              <Route exact path='/admin/users' element={<UserManagement />} />
              <Route exact path='/admin/therapists' element={<TherapistManagement />} />
              <Route exact path='/admin/content' element={<ContentManagement />} />
              <Route path="/Doctors" element={<Doctors />} />
              <Route path="/Doctors/:id" element={<Doctor_Description />} />
              <Route path="/appointment" element={<Consultation/>} />
              <Route path="/Patient" element={<Consultation />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/journal" element={<JournalPage />} />

            </Routes>
          </Router>

      </div>
  );
}


export default App;