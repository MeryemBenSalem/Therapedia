import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import JournalPage from "./Pages/JournalPage";

function App() {
  return (
      <div className="App">
        <Router basename="Therapedia">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
