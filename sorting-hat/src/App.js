import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Menu from './components/Menu/Menu';
import HatContainer from './components/HatContainer/HatContainer';
import Hat from './components/Hat/Hat';
import 'tachyons';


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
      route: 'sorting',
      numberOfHats: 10,
      sortingMethod: 'bubble'
    }
  }

  onHatInputChange = (event) => {
  //  console.log(event.target.value);
    this.setState({
      numberOfHats: event.target.value
    });
  }

  onMenuButtonClick = () => {
    this.setState({
      route: 'sorting'
    });
  }

  render() {
    console.log(this.state.numberOfHats);
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        {
          this.state.route === 'menu'
          ? <Menu onHatInputChange={this.onHatInputChange} onMenuButtonClick={this.onMenuButtonClick}/>
          : <HatContainer hats={this.state.numberOfHats} />
        }
      </div>
    );
  }
}

export default App;
