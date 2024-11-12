import placeholderPortrait from './Assets/placeholderPortrait.jpg';

export default function FrontPage() {
    return (
        <>
            <div className="App">
            <body className="body">
                <div className="front-page">
                    <h3>This is the home page contents</h3>
                    <img src={placeholderPortrait} alt="placeholder"></img>
                </div>
            </body>
            </div>
        </>
        )
}

