import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      persons = (
        <div>
          {this.state.persons.map((person,index)=>{
            return (
              <Person 
              key= {person.id} 
              name={person.name} 
              age={person.age}
              change={(event)=>this.nameChangeHandler(event, person.id)} 
              click={this.deletePersonHandler.bind(this, index)} />
            );
          })}
          </div>
      )
    }
    
    let classes = [];

    if (this.state.persons.length <=2) {classes=['red','bold']}

    else {classes=['blue','italic']}

    return (
      
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p className={classes.join(' ')}>this is working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
         {persons}
      </div>
    );
  }
}

export default App;
