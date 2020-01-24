import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Person from './Person/Person';
import './Person/Person.css';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      { id:"asdf1", name: "Teri", age: 45 },
      { id:"asdf123e", name: "Linus", age: 67 },
      { id:"asdf1249", name: "Marcy", age: 21}
   ], 
   otherState: 'some other value',
   showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( {persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
            })
          }
        </div>
      );
    }
  return (
    <div className="App">
      <h1>React app.</h1>
      <p>this is working.</p>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
      {persons}
    </div>
  );
  }
};


export default App;
