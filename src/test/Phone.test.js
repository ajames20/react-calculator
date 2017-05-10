import React from 'react';
import ReactDOM from 'react-dom';
import Phone from '../components/Phone';

it('renders Phone Component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Phone />, div);
});
