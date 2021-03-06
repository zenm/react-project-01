import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import '../components/Persons/Person/Person.css';

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

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState (
      { persons : persons }
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
      backgroundColor: 'green',
      color: 'white',
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
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
    }
    
    let classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

  return (
    <div className="App">
      <h1>React app.</h1>
      <p className={classes.join(' ')}>this is working.</p>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle People</button>
      {persons}
    </div>
  );
  }
};


export default App;
