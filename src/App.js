import React from 'react';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SignUpDoc from './Pages/Sign_up_doc'; 
import SignUp from './Pages/Sign_up';
import Home from './Pages/Home'; 
import Legal from './Pages/Legal'; 
import Sign_in from './Pages/Sign_in';








function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_up_doc" element={<SignUpDoc />} />
        <Route path="/" element={<Home />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/Sign_in" element={<Sign_in />} />



      </Routes>
    </Router>
  );
}



export default App;


