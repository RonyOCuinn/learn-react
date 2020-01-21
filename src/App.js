import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Rónán', age: 28 },
      { name: 'Bleeks', age: 28 }
    ]
  }

  switchHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Eoin', age: 28 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Rónán', age: 28 },
        { name: event.target.value, age: 28 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      pointer: 'cursor'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This works.</p>
        <button
          style={style}
          onClick={() => this.switchHandler('Róny!!')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchHandler.bind(this, 'Róny 👻')}>
          My hobbies: Pints
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          My hobbies: Pints
        </Person>
      </div>
    );
  }
}

export default App;
