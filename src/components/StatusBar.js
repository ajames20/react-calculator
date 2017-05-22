import React, { Component } from 'react';

// Images
import battery from '../images/battery.svg';
import statusbar from '../images/statusbar.svg';
import wifi from '../images/wifi.svg';

class StatusBar extends Component {
  componentWillMount() {
    this.setTime();
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setTime();
    }, 1000);
  }
  setTime = () => {
    const currentdate = new Date();
    let hours = currentdate.getHours();
    let minutes = currentdate.getMinutes();
    let seconds = currentdate.getSeconds();

    // correct for number over 24, and negatives
    if (hours >= 24) {
      hours -= 24;
    }
    if (hours < 0) {
      hours += 12;
    }

    hours += '';
    if (hours.length === 1) {
      hours = `0${hours}`;
    }

    minutes += '';
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }

    seconds += '';
    if (seconds.length === 1) {
      seconds = `0${seconds}`;
    }
    this.setState({
      // hours, === hours: hours,
      hours,
      minutes,
      seconds,
    });
  };
  render() {
    return (
      <div className="status-bar">
        <img id="status-icon" src={statusbar} alt="singnal" />
        <img id="wifi-icon" src={wifi} alt="wifi" />
        <span id="clock">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </span>
        <img id="battery-icon" src={battery} alt="battery" />
      </div>
    );
  }
}

export default StatusBar;
