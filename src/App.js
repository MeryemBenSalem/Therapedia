import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Doctors from "./Pages/Doctors";
import Doctor_Description from "./Pages/Doctor_Description";
import SignupForm from "./Components/SignupForm"; // Import the SignupForm component
import theme from "./Assets/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
      <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router basename="Therapedia">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/Doctors/id" element={<Doctor_Description />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        </ThemeProvider>
      </div>
  );
}

export default App;
