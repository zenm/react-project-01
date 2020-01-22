import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      { name: "Linus", age: 67 },
      { name: "Teri", age: 45 },
      { name: "Marcy", age: 21}
   ], 
   otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState (
      { persons : [
          { name: "Linus", age: 37 },
          { name: "Teri", age: 35 },
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
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies include: running, tekken</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
  );
  }
};


export default App;
