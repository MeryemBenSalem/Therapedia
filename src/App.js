
import React from 'react';
import { createRoot } from 'react-dom';


createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Consultation from './components/consultation'; 
import SignUp from './components/sign_up'; 
import SignUpDoc from './components/sign_up_doc'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_up_doc" element={<SignUpDoc />} />
      </Routes>
    </Router>
  );
}



export default App;


