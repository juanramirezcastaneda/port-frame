const React = require('react');
const ReactDOM = require('react-dom');

// import React from 'react';
// import ReactDOM from 'react-dom';

function App() {
  console.log('bundle');
  return <div>HelloWorld</div>;
}

ReactDOM.render(<App />, document.getElementById('app'));
