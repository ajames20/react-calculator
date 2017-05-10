import React, { Component } from 'react';

// Componentes
import Phone from './components/Phone';
import StatusBar from './components/StatusBar';
import CalculatorApp from './components/CalculatorApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Phone />
        <div className="screen">
          <StatusBar />
          <CalculatorApp />
        </div>
        <div className="home-button" />
      </div>
    );
  }
}

export default App;
