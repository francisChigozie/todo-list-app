import React from 'react';

const LS_Key = 'reactApp.todos'

function TodoList(){
    const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(LS_Key))
      if (storedTodos) setTodos(storedTodos)

  }, [])

  React.useEffect(() => {
      localStorage.setItem(LS_Key, JSON.stringify(todos))
  }, [todos])

  

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

         if(!text){
                return  'Pls what todo..';
        }else{

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
