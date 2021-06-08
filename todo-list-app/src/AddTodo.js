

function AddTodo ({setTodos}) {

    function handleSubmit (e) {

        e.preventDefault()
        console.log(e.target.elements.input.value)
        const text = e.target.elements.input.value
        const todo = {id: Math.random(), text}
        setTodos(prev => prev.concat(todo))
        
        

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='input' />
            <button type='submit' >Add</button>
        </form>

    )
}

export default AddTodo;