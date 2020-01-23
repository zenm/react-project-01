import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      { name: "Teri", age: 45 },
      { name: "Linus", age: 67 },
      { name: "Marcy", age: 21}
   ], 
   otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState (
      { persons : [
          { name: newName, age: 35 },
          { name: "Linus", age: 37 },
          { name: "Marcy", age: 0}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState (
      { persons : [
          { name: event.target.value, age: 35 },
          { name: "Linus", age: 37 },
          { name: "Marcy", age: 0}
        ]
      }
    )
  }

  render() {
  return (
    <div className="App">
      <h1>React app.</h1>
      <p>this is working.</p>
      <button onClick={this.switchNameHandler.bind(this, 'Teri')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchNameHandler.bind(this, 'Tina')}
      changed={this.nameChangedHandler}/>
      
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      >Hobbies include: running, tekken</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} />
    </div>
  );
  }
};


export default App;
