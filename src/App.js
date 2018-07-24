import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {

  state = {
    persons : [
      {name: 'Max', age: 32},
      {name: 'Mos', age: 32},
      {name: 'Meh', age: 32},
    ],
    showPersons: true,

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

  nameChangeHandler = (e) => {
    this.setState({
      persons : [
       {name: e.target.value, age: 32},
       {name: 'Mosss', age: 32},
       {name: 'ss', age: 32},
   ]})
  }

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons]; //copy the persons array >pointer to original data > refrence type 
    persons.splice(personIndex, 1);
    this.setState({persons});
  }
  render() {
    let persons = null;
    if (this.state.showPersons){
      persons = ( <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click={this.deleteNameHandler.bind(this, index)}
          name={person.name}
          age={person.age}
          changed={this.nameChangeHandler}
          />
        })}
      </div>);
    }
    return (
      <div className="App">
        <h1 className="App-title">
          Welcome to React
        </h1>
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

const style = {
  backgroundColor: 'white',
  font: 'inherit', 
  border: '1px solid blue',
  padding:'8px',
  cursor: 'pointer'
}
export default App;
