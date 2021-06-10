import React from "react";

function TodoList(){
    const [todos, setTodos] = React.useState([
    {id: 1, text: "Walk the dog", done: false},
    {id: 2, text: "Make breakfast", done: false},
    {id: 3, text: "Do school run", done: false}
  ]);

    return(
        <div className="addtodo">
            <AddTodo setTodos={setTodos}/>
           <ul>
            {todos.map(todo => 
             <li key={todo.id}>{todo.text}</li>
                )}
            
           </ul>
        </div>
    )
}
export default TodoList;

function AddTodo({setTodos}){

    function handleAddTodo(event){
        event.preventDefault();
        const text = event.target.elements.addTodo.value;
        const todo = {
            id: 4,
            text,
            done: false
        };
        setTodos(prevTodos => {
            return prevTodos.concat(todo)
        })
    }
    return(
       <form onSubmit={handleAddTodo}>
           <input name="addTodo" placeholder="Add todo.."/>
           <button type="submit">Submit</button>
       </form>
    )
}
