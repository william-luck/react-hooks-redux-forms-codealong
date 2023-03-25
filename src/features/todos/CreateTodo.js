import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { todoAdded } from "./todosSlice";


function CreateTodo() {

  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')
  const todos = useSelector(state => state.entities)

  function handleChange(e) {
    setTodo(e.target.value)
  }

  function handleSubmit(e){ 
    e.preventDefault()
    dispatch(todoAdded(todo))
    setTodo('')
  }
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={handleChange} value={todo}/>
          </p>
          <input type="submit" />
        </form>

        {todos?.map(todo => todo)}
      </div>

      
  )
}

export default CreateTodo;
