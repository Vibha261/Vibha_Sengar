import React from 'react';
import './App.css';
import Navigator from './View/Navigator/Navigator';
import Home from './View/Home/Home';
import About from './View/About/About';
import Skill from './View/Skills/Skill';
import Project from './View/Project/Project';
import Contact from './View/Contact/Contact';
import {Container, Fade} from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Home/>
          <div>
            <Container className="c1">
              <Fade in onDurationChange={2000}>
                <About />
              </Fade>
            </Container>
          </div>
      <div>
          <Container className="c1">
            <Fade in onDurationChange={2000}>
              <Skill/>
            </Fade>
          </Container>
        </div>
        <div>
        <Container className="container-box rounded">
          <Fade bottom duration={2000}>
            <hr />
            <Project />
          </Fade>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade bottom duration={2000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <div>
        <div className='Footert'>
          Made by Vibha Sengar
        </div>
      </div>
    
    </div>
  );
}

export default App;
