

function AddTodo () {

    function handleSubmit (e) {

        e.preventDefault()
        console.log(e.target.elements.input.value)
        e.target.elements.input.value = ''

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='input' />
            <button type='submit' >Add</button>
        </form>

    )
}

export default AddTodo;