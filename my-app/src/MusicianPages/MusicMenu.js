import React from 'react';
import { Link } from 'react-router-dom';

export default function MusicMenu() {
    return (
        <>
        <div className="menu-left">
                    <h1>Musician</h1>
                        <h2><Link to="/musicabout">About Me</Link></h2>
                        <h2><Link to="/events">Events</Link></h2>
                        <h2><Link to="/lessons">Lessons</Link></h2>
                        <h2><Link to="/performances">Performances</Link></h2>
                        <h2><Link to="/contact">Contact</Link></h2>
                </div>
        </>
    )
}