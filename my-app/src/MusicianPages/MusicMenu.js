import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function MusicMenu() {
    return (
        <>
        <div className="menu-left">
            <h1 className="name">Austin Han</h1>
            <h2><Link to="/" className="menu-selection">About</Link></h2>
            <h2><Link to="/events" className="menu-selection">Events</Link></h2>
            <h2><Link to="/lessons" className="menu-selection">Lessons</Link></h2>
            <h2><Link to="/performances" className="menu-selection">Performances</Link></h2>
            <h2><Link to="/portfolio" className="menu-selection">Photography</Link></h2>
            <h2><Link to="/commissions" className="menu-selection">Commissions</Link></h2>
            <h2><Link to="/contact" className="menu-selection">Contact</Link></h2>
        </div>
        </>
    )
}