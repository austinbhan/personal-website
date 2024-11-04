import './App.css';
import React from 'react';

import FrontPage from './FrontPage';
import AboutMe from './MusicianPages/AboutMe';
import Events from './MusicianPages/Events'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<FrontPage/>} />
        <Route path ="/musicabout" element={<AboutMe />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
