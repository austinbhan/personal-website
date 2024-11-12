import './App.css';
import React from 'react';

import FrontPage from './FrontPage';
import AboutMe from './MusicianPages/AboutMe';
import Events from './MusicianPages/Events'
import Lessons from './MusicianPages/Lessons';
import Performances from './MusicianPages/Performances';
import Contact from './MusicianPages/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicMenu from './MusicianPages/MusicMenu';

function App() {
  return (
    <>
      <Router>
        <div className="body">
          <MusicMenu />
          <Routes>
            <Route path ="/" element={<FrontPage/>} />
            <Route path ="/musicabout" element={<AboutMe />} />
            <Route path="/events" element={<Events />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
