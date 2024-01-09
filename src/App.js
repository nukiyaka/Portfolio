import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="Navigation">
          <div className="Navigation-container">
              <ul>
                  <li>
                      <a href="#Skill">Skill</a>
                  </li>
                  <li>
                      <a href="#Experience">Experience</a>
                  </li>
                  <li>
                      <a href="#Portfolio">Portfolio</a>
                  </li>
                  <li>
                      <a href="#Contacts-section">Contacts</a>
                  </li>
                  <li>
                  <a href="#Extra">Extra</a>
                  </li>
              </ul>
          </div>
        </div>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Hire Me lol
          </p>
        </header>
        <div className="Skill">
          <div className="Container">
            <a id="Skill">Skill</a>
              <div className="ExtraList-container">
                <h3>Javascript</h3>
                <h3>Node.js</h3>
                <h3>React.js</h3>
                <h3>Express.js</h3>
              </div>
          </div>
        </div>
        <div className="Experience">
          <div className="Container">
            <a id="Experience">Experience</a>
              <div className="ExperienceList-container">
                <h3>Climbing</h3>
                <h3>Dancing/Choreographing</h3>
              </div>
          </div>
        </div>
        <div className="Portfolio">
          <div className="Container">
            <a id="Portfolio">Extra</a>
              <div className="PortfolioList-container">
                <h3>Climbing</h3>
                <h3>Dancing/Choreographing</h3>
              </div>
          </div>
        </div>
        <div className="Contact">
              <div className="Container">
                  <a id="Contacts-section">Contacts</a>
                  <div className="ContactList-container">
                      <h3>Email: yuki.naka629@gmail.com</h3>
                      <h3>Phone Number: 424-212-1210</h3>
                      <h3>LinkedIn: https://www.linkedin.com/in/yukinaka/</h3>
                      <h3>Github: https://github.com/nukiyaka</h3>
                  </div>
              </div>
          </div>
          <div className="Extra">
            <div className="Container">
              <a id="Extra">Extra</a>
                <div className="ExtraList-container">
                  <h3>Climbing</h3>
                  <h3>Dancing/Choreographing</h3>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
