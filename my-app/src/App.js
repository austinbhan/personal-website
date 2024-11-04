import './App.css';
import placeholderPortrait from "./Assets/placeholderPortrait.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
      <p>This is the header. Name goes here</p>
      </header>
      <body className="body">
        <h3>This is the body. Menus and the cover image go here</h3>
        <div className="menu-and-image">
          <div className="menu-left">
            <p>Musician</p>
            <ul>
              <li>About Me</li>
              <li>Events</li>
              <li>Lessons</li>
              <li>Performances</li>
              <li>Contact</li>
            </ul>
          </div>
          <img src={placeholderPortrait} alt="placeHolder" className="portrait"/>
          <div className="menu-right">
            <p>Photography</p>
            <ul>
              <li>Portfolio</li>
              <li>Commissions</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </body>
      <footer className="footer">This is the footer. Copyright information down here</footer>
    </div>
  );
}

export default App;
