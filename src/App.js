import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


function App() {
  return (
    <div className='App'>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
