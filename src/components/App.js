import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import GuessingForm from './GuessingForm'

class GuessingGame extends Component {
  constructor(props){
    super(props);
    this.state ={
      renderRules: false,
      newGame: false
    }
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

  gameRestart(){
    this.setState({
      newGame: !this.state.newGame
    },
    () => console.log('game is reset', this.state.newGame));
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <NavigationBar sendStatus={message => this.handleNavBar(message)}/>
        </header>

      <main>
        <h1>HOT or COLD</h1>
        <GuessingForm newGame={this.state.newGame}/>
      </main>
      </div>
    );
  }
}

export default GuessingGame;
