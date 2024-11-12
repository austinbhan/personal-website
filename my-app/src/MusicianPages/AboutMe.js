import React from 'react';
import MusicMenu from './MusicMenu';

export default function AboutMe() {
    return (
        <body className="body">
            <h3>This is the body. Menus and the cover image go here</h3>
                <div className="menu-and-image">
                    <MusicMenu />
                    <p>This is the placeholder about me contents.</p>
                </div>
            </body>
    )
}