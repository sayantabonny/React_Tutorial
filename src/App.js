import React from 'react';
import './App.css';
import Person from './Person/Person'


function App() {
  return (
    <div className="App">
      <h3>I am Sayanta</h3>
    </div>
  );
  // or we could do return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am Sayanta as above'));
}

export default App;
