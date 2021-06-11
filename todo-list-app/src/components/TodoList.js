import React from 'react';

function TodoList(){
    const [todos, setTodos] = React.useState([
    {id: 1, text: "Walk the dog", done: false},
    {id: 2, text: "Make breakfast", done: false},
    {id: 3, text: "Do school run", done: false}
  ]);

  function handleToggleTodo(todo){
    const updatedTodos = todos.map(t => 
        t.id === todo.id ? {
           ...t,
           done: !t.done
        } :t );
        setTodos(updatedTodos)
  }

 /* if(!todos.length){
      return <p>No todos left!</p>;
  }*/

    return(
        <div className="blue">
            <AddTodo setTodos={setTodos}/>
           <ol>
            {todos.map(todo => 
             <li 
             onDoubleClick={() => handleToggleTodo}
             style={{
                 textDecoration: todo.done ? 'line-through' : ""
             }} key={todo.id}>{todo.text}
             <DeleteTodo todo={todo} setTodos={setTodos} />
             </li>
             
                )}
           </ol>
        </div>
    )
}
export default TodoList;

function DeleteTodo({todo, setTodos}){
    function handleDeleteTodo(){
        const confirmed = window.confirm("Do you want to delete this?");
        if(confirmed){
            setTodos(prevTodos => {
                return prevTodos.filter(t => t.id !== todo.id);
            });
        }
    }
    return(
        <span 
        onClick={handleDeleteTodo}
        role="button" 
        style={{
            color: 'red',
            fontWeight: 'bold',
            marginLeft: 10,
        }}>x</span> 
    )
}

function AddTodo({setTodos}){

    const inputRef = React.useRef();

    function handleAddTodo(event){
        event.preventDefault();
        const text = event.target.elements.addTodo.value;
        const todo = {
            id: Math.random(),
            text,
            done: false
        };
        setTodos(prevTodos => {
            return prevTodos.concat(todo)
        })
        inputRef.current.value = "";
    }
    return(
       <form onSubmit={handleAddTodo}>
           <fieldset className="zone">
           <input name="addTodo" placeholder="Add todo.." ref={inputRef}/>
           <button type="submit">Submit</button>
           </fieldset>
       </form>
    )
}
