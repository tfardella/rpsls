import React from 'react';
import { choices } from './outcomes'

export function Choices({handleUserChoice}) {
  return (
    <div>
      <div>Choose wisely!</div>
      {choices.map(choice => {
        const classes=`item ${choice}`
        return (
          <div
            key={choice}
            className={classes}
            onClick={() => handleUserChoice(choice)}
          >
          </div>
        )
      }
      )}
    </div>
  )
}
