import React, {Component} from 'react';

import './App.css';

import NavigationBar from './NavigationBar'

import StatusBar from './StatusBar';
import UserInterface from './user-interface';
import GuessNumber from './guess-number';
import History from './history'

import Rules from './rules'

export default class GuessingForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderRules: false,
      correctNumber: Math.floor(Math.random()*20),
      userInput: '',
      status: 'Make a Guess',
      numberOfGuesses: 0,
      history: []
    }
    this.baseState = this.state
  }

  gameRestart = () => {
    this.setState(this.baseState);
  }
  
  handleNavBar(input){
    if(input === "what"){
      this.setState({
        renderRules: true
      },
      () => console.log(this.state.renderRules))
    } else if (input === "new game"){
      this.gameRestart()
      console.log('game is reset');
    }
  }

  toggleWhatButton(){
    this.setState({
      renderRules: false
    })
  }

  updateUserInput(userInput){
    this.setState({
      userInput
    },
    () => this.checkGuess());
    this.addGuess();
    this.updateHistory(userInput);
  }

  addGuess(){
    this.setState({
      numberOfGuesses: this.state.numberOfGuesses + 1
    })
  }

  updateHistory(input){
    this.setState({
      history: [input, ...this.state.history]
    });
  }

  checkGuess(){
    const userInput = this.state.userInput;
    const correctAnswer = this.state.correctNumber;
    const difference = Math.abs(userInput - correctAnswer);
    if(userInput == correctAnswer){
      this.setState({
        status: `You Got It! The answer was ${correctAnswer}`
      })
    } else if(difference < 5){
      this.setState({
        status: "Hot"
      })
    } else if(difference > 5) {
      this.setState({
        status: "Cold"
      })
    }
  }

  render(){
    if(this.state.renderRules){
      return (
        <div>
          <Rules toggleButton={e => this.toggleWhatButton()}/>
        </div>
      )
    }

    return (
      <div className="App">

        <header className="App-header">
          <NavigationBar sendStatus={message => this.handleNavBar(message)}/>
        </header>

        <main>
          
          <h1>HOT or COLD</h1>
          <div className="guessing-form">
            <StatusBar message={this.state.status}/>

            <div className="user-interface">
              <UserInterface updateInput={input => this.updateUserInput(input)}/>
            
              <GuessNumber 
                value={this.state.numberOfGuesses}
                correctAnwer={this.state.correctNumber}
                numberOfGuesses={num => this.addGuess()}/>
            </div>
            <History history={this.state.history}/>
        </div>
        </main>
      </div>
    )
  }
}