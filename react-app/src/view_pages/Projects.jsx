// import '../App.css';
import React from 'react';
import logo from '../imgs/logo.svg'

class Projects extends React.Component {
  render() {
    return (
      
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="" />
          <p>
            Edit <code>src/App.js</code> &amp; save to reload
          </p>
          <a href="teddywaweru.github.io">
            Here's a link that's gonna take you back.
          </a>
          <p>
            Are we learning yet?
          </p>
        </header>
      </div>
    );
  }
}

export default Projects;