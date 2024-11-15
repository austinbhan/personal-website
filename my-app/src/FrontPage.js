import placeholderPortrait from './Assets/placeholderPortrait.jpg';
import Biography from './Assets/Biography';

export default function FrontPage() {
    return (
        <>
            <div className="App">
                <body className="body">
                    <div className="front-page">
                        <img src={placeholderPortrait} alt="placeholder"></img>
                        <p>
                            <Biography />
                        </p>
                    </div>
                </body>
            </div>
        </>
        )
}

