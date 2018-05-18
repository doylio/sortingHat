import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Menu from './components/Menu'
import HatContainer from './components/HatContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}

export default App;
