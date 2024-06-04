
import React from 'react';
import { createRoot } from 'react-dom';


createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Consultation from './Pages/Consultation';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Consultation" element={<Consultation/>} />
      </Routes>
    </Router>
  );
}



export default App;


