import React, { Component } from 'react';

class Phone extends Component {
  render() {
    return (
      <div>
        <p>
          developed by
          <a href="https://www.github.com/ajames20" target="_blank">
            {' '}
            andrewJames
          </a>
        </p>
        <div className="iphone" />
        <div className="circle" />
        <div className="camera" />
        <div className="speaker" />
      </div>
    );
  }
}

export default Phone;
