import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
    <h1>{counter}</h1>
    <h4>{counter}</h4>
  </div>
  );
}

export default App;
