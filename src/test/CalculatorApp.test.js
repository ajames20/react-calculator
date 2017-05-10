import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';

const TestUtils = require('react-dom/test-utils');

import CalculatorApp from '../components/CalculatorApp';

describe('CalculartorApp ', () => {
  it('should exist', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CalculatorApp />, div);
  });

  it('should display a number in string format when inputDigit called', () => {
    const calcApp = TestUtils.renderIntoDocument(<CalculatorApp />);

    calcApp.inputDigit(4);

    expect(calcApp.state.displayValue).toBe('4');
    expect(calcApp.state.displayValue).toNotBe(0);
  });

  it('should display a digit with a decimal added when inputDecimal called', () => {
    const calcApp = TestUtils.renderIntoDocument(<CalculatorApp />);

    calcApp.setState({ displayValue: '0.1' });
    calcApp.inputDecimal();

    expect(calcApp.state.displayValue).toBe('0.1');
    expect(calcApp.state.displayValue).toNotBe('0.1.0');
  });

  it('should toggle  -4 to 4 when toggleNegative called', () => {
    const calcApp = TestUtils.renderIntoDocument(<CalculatorApp />);

    calcApp.setState({ displayValue: '-4' });
    calcApp.toggleNegative();

    expect(calcApp.state.displayValue).toEqual('4');
    expect(calcApp.state.displayValue).toNotEqual('-4');
  });

  it('should change the diplayed value in to a percentage format wehn percentage called', () => {
    const calcApp = TestUtils.renderIntoDocument(<CalculatorApp />);
    calcApp.setState({ displayValue: 9 });
    calcApp.percentage();

    expect(calcApp.state.displayValue).toEqual('0.09');
    expect(calcApp.state.displayValue).toNotEqual('-4');
  });

  it('should return an answer from an equation wehn peromOperation called', () => {
    const calcApp = TestUtils.renderIntoDocument(<CalculatorApp />);
    calcApp.setState({ displayValue: 2, operator: null });

    let nextOperator = '*';
    calcApp.performOperation(nextOperator);

    calcApp.setState({ value: 2 });

    nextOperator = '=';
    calcApp.performOperation(nextOperator);

    expect(calcApp.state.value).toEqual(4);
    expect(calcApp.state.value).toNotEqual(30);
  });

  it('should clear state when clearDisplay called', () => {
    const calcApp = TestUtils.renderIntoDocument(<CalculatorApp />);
    calcApp.clearDisplay();

    expect(calcApp.state.value).toBe(null);
  });
});
