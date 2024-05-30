
import React from 'react';
import { createRoot } from 'react-dom';


createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './Pages/sign_up'; 
import SignUpDoc from './Pages/sign_up_doc'; 
import Home from './Pages/Home'; 
import Legal from './Pages/Legal'; 






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_up_doc" element={<SignUpDoc />} />
        <Route path="/" element={<Home />} />
        <Route path="/Legal" element={<Legal />} />


      </Routes>
    </Router>
  );
}



export default App;


