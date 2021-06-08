import {useState} from 'react'
import AddTodo from './AddTodo'

function App() {
  const text = '[1] Walk the Dog ';
  const text2 = '[2] Buy Ice cream ' ;
  const text3 = '[3] Read a Book';

  const [todos, setTodos] = useState([{text: 'first', id: Math.random()}])

  return (
    <div className="App">
      <h1>To Do List</h1>
      {/* Adding AddTodo-Component */}
      <AddTodo setTodos={setTodos} todos={todos}/>
        <p>{text}</p>
        <p>{text2}</p>
        <p>{text3}</p>
    </div>
  );
}
export default App;