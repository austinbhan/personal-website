import React from 'react';
import { Link } from 'react-router-dom';
import MusicMenu from './MusicMenu';

export default function AboutMe() {
    return (
        <div className="body">
            <div className="menu-and-image">
            <MusicMenu />
                <p>This is the About Me Page</p>
            </div>
        </div>
    )
}