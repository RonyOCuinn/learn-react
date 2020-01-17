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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This works.</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Pints</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Pints</Person>
      </div>
    );
  }
}

export default App;
