import React, { Component } from 'react';
import './App.css';
import Person from './person/person';
import Radium from 'radium'

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,

  }
  switchNameHandler = (name) => {
    this.setState({
       persons : [
        {name: name, age: 32},
        {name: 'Mosss', age: 32},
        {name: 'ss', age: 32},
    ]})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })
    const  person= {
      ...this.state.persons[personIndex]
    };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons]; //copy the persons array >pointer to original data > refrence type 
    persons.splice(personIndex, 1);
    this.setState({persons});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null;
    if (this.state.showPersons){
      persons = ( <div>
        {this.state.persons.map((person, index) => {
          return <Person
          key={person.id}
          click={this.deleteNameHandler.bind(this, index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.nameChangeHandler(event, person.id)}
          />
        })}
      </div>);
      style.backgroundColor = 'red'
    }
    let classes = ['red', 'bold']
    return (
      <div className="App">
        <h1 className="App-title">
          Welcome to React
        </h1>
        <p
        className={classes.join(' ')}
        > hey hey iam here</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
        >
        Switch Name</button>
        {persons}
      </div>
    );
  }
}


export default Radium(App);
