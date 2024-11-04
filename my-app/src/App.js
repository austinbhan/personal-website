import './App.css';
import React from 'react';
import FrontPage from './FrontPage';
import AboutMe from './MusicianPages/AboutMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<FrontPage/>} />
        <Route path ="/musicabout" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
