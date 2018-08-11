import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Hello</h1>
  </div>
)

const element = document.getElementById('app');

ReactDOM.render(<App />, element);