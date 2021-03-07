import React from 'react';
import './App.css';
import Person from './Person/Person'
import {Person_Props} from './Person/Person'


function App() {
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
    </div>
  );
  // or we could do return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am Sayanta as above'));
}

export default App;
