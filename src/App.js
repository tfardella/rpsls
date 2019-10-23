import React, { useState } from 'react';
import './App.css';

import { Choices } from './Choices'
import { Results } from './Results'
import { choices } from './outcomes'

function App() {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();

  function computerChoose() {
    setComputerChoice ( choices[
      Math.round(Math.random() * (choices.length - 1))
    ]);
  };

  function handleUserChoice(choice) {
    setUserChoice(choice)
    setComputerChoice(computerChoose)
  }

  return (
    <div className="App">
      <header className="App-header">
        Rock, Paper, Scissors, Lizard, Spock
      </header>
      <div className="content">
        <div>Choose wisely!</div>
        <div className="choices">
          <Choices 
            handleUserChoice = {handleUserChoice}
          />
        </div>
        <div>
          <Results 
            computerChoice = {computerChoice}
            userChoice = {userChoice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
