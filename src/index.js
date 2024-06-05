import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import the main App component
import './index.css'; // Global styles

// Assuming you have a DOM element with id 'root'
const domElement = document.getElementById('root');

// Use createRoot from react-dom/client to render your application
createRoot(domElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
