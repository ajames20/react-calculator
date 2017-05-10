import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorApp from '../components/CalculatorApp';

it('renders CalculatorApp Component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorApp />, div);
});
