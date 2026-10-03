import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new root API
// import './index.css'; // Optional global CSS
import App from './App'; // Import the App component

// Create a root for React to manage rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
