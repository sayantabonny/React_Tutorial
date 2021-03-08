import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import {Person_Props} from './Person/Person'


class App extends Component{

  constructor(props) {
    super(props);
      this.state = {
        persons: [{
          name:'Max', age: 28
        },
        {
          name:'Manu', age: 30
        },
        {
          name:'Stephani', age: 25
        },
      ],
        Hobies: "N/A"
      };
    }    

  
      render(){
      return (
        <div className="App">
          <h3>I am Sayanta</h3>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <h1>Props i.e Arguments</h1>
          <Person_Props name="Sayanta" age="25"/>
          <Person_Props name="Ranjan" age="26"/>
          <Person_Props name="Tuhin"  age="23">Hobbies: Studying</Person_Props>
          <Person_Props name="Rusha"  age="24"/>
          <Person_Props name={this.state.persons[0].name}  age={this.state.persons[0].age}>Hobbies: {this.state.Hobies} </Person_Props>
          <Person_Props name={this.state.persons[1].name}  age={this.state.persons[1].age}>Hobbies: {this.state.Hobies} </Person_Props>
          <Person_Props name={this.state.persons[2].name}  age={this.state.persons[2].age}>Hobbies: {this.state.Hobies} </Person_Props>
        </div>
      );
      // or we could do return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am Sayanta as above'));
    }
}

export default App;
