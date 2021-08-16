import './App.css';
import React from 'react';
import TodoForm from './Component/TodoForm';
import ToDoList from './Component/ToDoList';
function App() {
  return (
    <div className="App">
      {/* <TodoForm/> */}
      <ToDoList/>
      {/* <h1>To Do List</h1> */}
    </div>
  );
}

export default App;
