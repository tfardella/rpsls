import React from 'react';
import { choices } from './outcomes'

export function Choices({handleUserChoice}) {
  return (
    <React.Fragment>
      {choices.map(choice => {
        const classes=`item ${choice}`
        return (
          <div
            key={choice}
            className={classes}
            onClick={() => handleUserChoice(choice)}
            aria-label={choice}
          />
        )
      }
      )}
    </React.Fragment>
  )
}
