import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'p1', name: 'Max', age: 28 },
      {id: 'p2', name: 'Manu', age: 29 },
      {id:'p3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
 
deletePersonHandler =  (personIndex) => {
  console.log ('deleted! no:', personIndex);
  const persons = this.state.persons.slice(); //copy of the state ary (so we won't change the state withouth setState())
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex (p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign ({},this.state.persons[personIndex]); //alternative to copy obj
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState ({persons: persons});
  }

  togglePersonsHandler = () => {
    //console.log('working!');
 const doesShow = this.state.showPersons;
 this.setState ({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler} />
          </div>
      )
    }
    return (
      
      <div className="App">
         <Cockpit 
         showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonsHandler} />
         {persons}
      </div>
    );
  }
}

export default Radium(App);
