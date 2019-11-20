import React, {useState, useReducer} from 'react';
import { initialState, formReducer} from "./Reducers/formreducers.js";


import TodoList from "./Components/TodoList.js";
import TodoForm from "./Components/todoform.js"
import './App.css';



function App() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  



  const handleAdd = newTask => {
    const taskSetup = {
      task: newTask, completed: false, id: Date.now()
    };
   {newTask !== "" && dispatch({ type: "ADD_TASK", payload: taskSetup }) }
  }

  const toggleTask = id => {
    console.log(id)
     dispatch({ type: "TOGGLE_TASKS", payload: id })
  }

  const clearTasks = () => {
    dispatch({type: "CLEAR_TASKS"})
  }

  return (
    <div > 
      <h2 >Todo List:</h2>
     <div >
     {state.item.map(item => ( <TodoList key = {item.id} item = {item} toggleTask = {toggleTask} />))}
     </div>
     <TodoForm handleAdd={handleAdd} clearTasks = {clearTasks}/>
    </div>
  );
}

export default App;