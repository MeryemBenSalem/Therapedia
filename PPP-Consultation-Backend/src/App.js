
import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(<App />);

import Doctors from "./Pages/Doctors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./assets/theme";
import Consultation from './Pages/Consultation';
import Doctor_Description from "./Pages/Doctor_Description";
function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
    <Router>
      <Routes>
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/Doctors/:id" element={<Doctor_Description />} />
        <Route path="/Consultation" element={<Consultation/>} />
      </Routes>
    </Router>
      </ThemeProvider>
  );
}



export default App;


