import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Correct use of createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
