import React, {useState} from "react";


function TodoForm({handleAdd, clearTasks}) {
    

    const [task, setTask] = useState("");

    const handleChange = event => {
        setTask(event.target.value);
        console.log(task)
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleAdd(task)
        setTask("")
    }

    const handleRemove = event => {
        event.preventDefault()
        clearTasks()
    }


    return (
        <div >
        <form onSubmit = {handleSubmit} >
            <input  name ="item" placeholder = "New Task" value = {task}  onChange = {handleChange}/>
            <button  onClick = {handleSubmit} type = "submit">Add Task</button>
        </form>
        <button  onClick = {handleRemove}>Clear Completed</button>
        </div >
    )
}

export default TodoForm;