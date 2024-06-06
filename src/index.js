
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import the main App component

import reportWebVitals from './reportWebVitals'; // Import reportWebVitals

// Assuming you have a DOM element with id 'root'
const domElement = document.getElementById('root');

// Use createRoot from react-dom/client to render your application
createRoot(domElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
