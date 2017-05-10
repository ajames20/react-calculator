import React from 'react';
import ReactDOM from 'react-dom';
import StatusBar from '../components/StatusBar';

it('renders StatusBar Component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusBar />, div);
});
