import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../components/Display';

it('renders Display Component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
});
