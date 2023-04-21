import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './features/Todo/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
