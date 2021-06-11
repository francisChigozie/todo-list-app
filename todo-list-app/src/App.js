import React from 'react';
import './index.css'
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="App">
      <h1 className="primary">Todo List</h1>
      <TodoList />
    </div>
  );
}
export default App;