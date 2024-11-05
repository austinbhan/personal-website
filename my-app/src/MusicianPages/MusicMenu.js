import React from 'react';
import { Link } from 'react-router-dom';

export default function MusicMenu() {
    return (
        <>
        <div className="menu-left">
                    <p>Musician</p>
                    <ul>
                        <li><Link to="/musicabout">About Me</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/lessons">Lessons</Link></li>
                        <li><Link to="/performances">Performances</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
        </>
    )
}