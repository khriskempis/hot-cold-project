import React, {Component }from 'react';

export default class UserInterface extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
    }
  }

  onSubmit(e){
    e.preventDefault();
    const text = this.textInput.value.trim();
    this.props.updateInput(text);
    this.textInput.value = '';
  }


  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input 
          type="number"
          ref={input => this.textInput = input}
          placeholder="Enter your Guess"
          required
        />
        <button>Guess</button>

      </form>
    )
  }
}