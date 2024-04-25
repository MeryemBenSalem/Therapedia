
import React from 'react';
import { createRoot } from 'react-dom';


createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ForumPage from './components/ForumPage';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Forum" element={<ForumPage />} />
            </Routes>
        </Router>
    );
}



export default App;