import React, { Component } from 'react';

// Componentes
import Phone from './components/Phone';
import StatusBar from './components/StatusBar';
import Display from './components/Display';
import Keys from './components/Keys';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Phone />
        <div className="screen">
          <StatusBar />
          <Display />
          <Keys />
        </div>
        <div className="home-button" />
      </div>
    );
  }
}

export default App;
