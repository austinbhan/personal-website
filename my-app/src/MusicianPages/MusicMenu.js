import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function MusicMenu() 
{
    return (
        <>
            <h1 className="name">Austin Han</h1>
            <div className="menu-and-name">
                <ul className="menu-bar">
                    <li><Link to="/" className="menu-selection">About</Link></li>
                    <li><Link to="/events" className="menu-selection">Events</Link></li>
                    <li><Link to="/lessons" className="menu-selection">Lessons</Link></li>
                    <li><Link to="/performances" className="menu-selection">Performances</Link></li>
                    <li><Link to="/portfolio" className="menu-selection">Photography</Link></li>
                    <li><Link to="/commissions" className="menu-selection">Commissions</Link></li>
                    <li><Link to="/contact" className="menu-selection">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}