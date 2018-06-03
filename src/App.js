import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Menu from './components/Menu/Menu';
import HatContainer from './components/HatContainer/HatContainer';


const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 1
    },
    size: {
      value: 3,
      random: true
    }
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'menu',
    }
  }



  onMenuButtonClick = () => {
    this.setState({
      route: 'sorting'
    });
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        {
          this.state.route === 'menu'
          ? <Menu onMenuButtonClick={this.onMenuButtonClick}/>
          : <HatContainer />
        }
      </div>
    );
  }
}

export default App;
