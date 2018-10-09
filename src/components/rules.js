import React from 'react'

export default function Rules(props){

  return (
    <div>
      <div className="rules-container">
        <header>
          <h1>What do I do?</h1>
        </header>

        <div>
          <p>This is a Hot or Cold Number Guessing Game. 
            The game goes like this:</p>
            <ol>
              <li>I pick a random secret number between 1 to 20 and keep it hidden.</li>
              <li>You need to guess until you can find the hidden secret number.</li>
              <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
            </ol>
            <p>So are you ready?</p>
            <button onClick={props.toggleButton}>Got it!</button>
        </div>
      </div>
    </div>
  )
}