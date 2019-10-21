import React from 'react';
import {outcomes } from './outcomes'

function getResult(userChoice, computerChoice) {
  let result = [null, ""];

  if (userChoice !== computerChoice) {
    result = outcomes[userChoice][computerChoice];
  }

  return result;
};

export function Results({userChoice, computerChoice}) {
  let outcome, 
      outcomeClass
  const result = getResult(userChoice, computerChoice)
  
  if(result[0] !== null) {
    outcome = result[0] === 1 ? "You Win!" : "You Lose!"
    outcomeClass = result[0] === 1 ? "outcome win" : "outcome lose"
  } else {
    outcome = "Tie"
    outcomeClass = "outcome tie"
  }

  if(userChoice){
    return (
      <div className="results">
        <div>
          <div className="choice"><span>You chose:</span> {userChoice}</div>
          <div className="choice"><span>Computer chooses:</span> {computerChoice}</div>
          <div className="description">{result[1] ? result[1] : " "}</div>
        </div>
        <div>
          <div className={outcomeClass}>{outcome}</div>
        </div>
      </div>
    )  
  } else {
    return (
      <div className="results" />
    )
  }
}
