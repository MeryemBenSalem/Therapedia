// src/App.js
import React from 'react';
import { createRoot } from 'react-dom';


createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Consultation from './components/consultation'; 
import SignUp from './components/sign_up'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}



export default App;


