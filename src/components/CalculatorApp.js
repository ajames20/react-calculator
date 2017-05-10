import React, { Component } from 'react';

class Display extends Component {
  state = {
    scale: 1,
  };

  componentDidUpdate() {
    const { scale } = this.state;

    const node = this.node;
    const parentNode = node.parentNode;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    } else if (scale < 1) {
      this.setState({ scale: 1 });
    }
  }

  render() {
    const { scale } = this.state;

    return (
      <div
        className="auto-scaling-text calculator-output"
        style={{ transform: `scale(${scale},${scale})` }}
        ref={node => this.node = node}
      >
        {this.props.children}
      </div>
    );
  }
}

class CalculatorApp extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
      displayValue: 0,
      clearButton: 'AC',
      waitingForOperand: false,
      operator: null,
    };
  }

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue: displayValue === 0 ? String(digit) : displayValue + digit,
        clearButton: 'C',
      });
    }
  }

  inputDecimal() {
    const { displayValue, waitingForOperand } = this.state;
    // Check if decimal is in the last position
    if (waitingForOperand) {
      this.setState({
        displayValue: '0.',
        waitingForOperand: false,
      });
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: `${displayValue}.`,
        waitingForOperand: false,
      });
    }
  }

  toggleNegative() {
    const { displayValue } = this.state;
    this.setState({
      displayValue: displayValue.charAt(0) === '-'
        ? displayValue.substr(1)
        : `-${displayValue}`,
    });
  }

  percentage() {
    const { displayValue } = this.state;
    const value = parseFloat(displayValue);

    this.setState({
      displayValue: String(value / 100),
    });
  }

  performOperation(nextOperator) {
    const { displayValue, operator, value } = this.state;
    const nextValue = parseFloat(displayValue);
    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue,
    };
    if (value == null) {
      // No previous value operator key was hit
      this.setState({
        value: nextValue,
      });
    } else if (operator) {
      const currentValue = value || 0;
      const computedValue = operations[operator](currentValue, nextValue);

      this.setState({
        value: computedValue,
        displayValue: String(computedValue),
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator,
    });
  }

  clearDisplay() {
    this.setState({
      displayValue: 0,
      clearButton: 'AC',
      operator: null,
      waitingForOperand: false,
    });
  }
  render() {
    const { displayValue, clearButton } = this.state;
    return (
      <div>
        <div id="display">
          <Display className="calculator-output">{displayValue}</Display>
        </div>
        <div>
          <div className="btn-line">
            <button
              className="calc-btn calc-btn-top"
              onClick={() => this.clearDisplay()}
            >
              {clearButton}
            </button>
            <button
              className="calc-btn calc-btn-top"
              onClick={() => this.toggleNegative()}
            >
              +/-
            </button>
            <button
              className="calc-btn calc-btn-top"
              onClick={() => this.percentage()}
            >
              %
            </button>
            <button
              className="calc-btn calc-btn-right"
              onClick={() => this.performOperation('/')}
            >
              ÷
            </button>
          </div>

          <div className="btn-line">
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(7)}
            >
              7
            </button>
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(8)}
            >
              8
            </button>
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(9)}
            >
              9
            </button>
            <button
              className="calc-btn calc-btn-right"
              onClick={() => this.performOperation('*')}
            >
              x
            </button>
          </div>

          <div className="btn-line">
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(4)}
            >
              4
            </button>
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(5)}
            >
              5
            </button>
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(6)}
            >
              6
            </button>
            <button className="calc-btn calc-btn-right">-</button>
          </div>

          <div className="btn-line">
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(1)}
            >
              1
            </button>
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(2)}
            >
              2
            </button>
            <button
              className="calc-btn calc-btn-numbers"
              onClick={() => this.inputDigit(3)}
            >
              3
            </button>
            <button
              className="calc-btn calc-btn-right operator"
              onClick={() => this.performOperation('+')}
            >
              +
            </button>
          </div>

          <div className="btn-line">
            <button
              className="calc-btn zero calc-btn-bottom calc-btn-numbers"
              onClick={() => this.inputDigit(0)}
            >
              0
            </button>
            <button
              className="calc-btn calc-btn-bottom"
              onClick={() => this.inputDecimal()}
            >
              .
            </button>
            <button
              className="calc-btn calc-btn-right calc-btn-bottom"
              onClick={() => this.performOperation('=')}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
