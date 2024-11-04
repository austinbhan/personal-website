import './App.css';
import React from 'react';
import FrontPage from './FrontPage';

function App() {
  return (
    <div className="App">
      <header className="header">
      <p>This is the header. Name goes here</p>
      </header>
      <body className="body">
      <FrontPage />
      </body>
      <footer className="footer">This is the footer. Copyright information down here</footer>
    </div>
  );
}

export default App;
