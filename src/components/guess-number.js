import React from 'react';

export default function guessNumber(props){
  return(
    <div className="guess-display">
      <p>Guess #<span className="guess-number">{props.value}</span></p>
    </div>
  )
}