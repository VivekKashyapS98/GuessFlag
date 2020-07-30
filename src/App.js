import React from 'react';
import Quiz from './Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="nav-text">GuessFlag</h1>
        <h4 className="nav-text p">A Country Flag guessing Game</h4>
      </header>
      <Quiz />
    </div>
  );
}

export default App;
