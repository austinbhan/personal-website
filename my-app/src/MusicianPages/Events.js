import { Link } from 'react-router-dom';
import MusicMenu from './MusicMenu';

export default function Events() {
    return (
        <>
                <body className="body">
            <h3>This is the body. Menus and the cover image go here</h3>
                <div className="menu-and-image">
                    <MusicMenu />
                    <p>This is the placeholder for events.</p>
                </div>
            </body>
        </>
    )
}