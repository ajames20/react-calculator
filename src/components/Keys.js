import React, { Component } from 'react';

class Keys extends Component {
  render() {
    return (
      <div>
        <div className="btn-line">
          <span className="calc-btn calc-btn-top">AC</span>
          <span className="calc-btn calc-btn-top">+/-</span>
          <span className="calc-btn calc-btn-top">%</span>
          <span className="calc-btn calc-btn-right">÷</span>
        </div>

        <div className="btn-line">
          <span className="calc-btn calc-btn-numbers">7</span>
          <span className="calc-btn calc-btn-numbers">8</span>
          <span className="calc-btn calc-btn-numbers">9</span>
          <span className="calc-btn calc-btn-right">x</span>
        </div>

        <div className="btn-line ">
          <span className="calc-btn calc-btn-numbers">4</span>
          <span className="calc-btn calc-btn-numbers">5</span>
          <span className="calc-btn calc-btn-numbers">6</span>
          <span className="calc-btn calc-btn-right">-</span>
        </div>

        <div className="btn-line ">
          <span className="calc-btn calc-btn-numbers">1</span>
          <span className="calc-btn calc-btn-numbers">2</span>
          <span className="calc-btn calc-btn-numbers">3</span>
          <span className="calc-btn calc-btn-right operator">+</span>
        </div>

        <div className="btn-line ">
          <span className="calc-btn zero calc-btn-bottom calc-btn-numbers">
            0
          </span>
          <span className="calc-btn calc-btn-bottom">.</span>
          <span className="calc-btn calc-btn-right calc-btn-bottom">=</span>
        </div>
      </div>
    );
  }
}

export default Keys;
