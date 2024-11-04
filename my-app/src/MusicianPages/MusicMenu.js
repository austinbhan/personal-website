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
                        <li>Lessons</li>
                        <li>Performances</li>
                        <li>Contact</li>
                    </ul>
                </div>
        </>
    )
}