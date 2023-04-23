import React, { useState } from 'react';
import  add  from "./TodoSlice"
import { useDispatch } from 'react-redux';

const Todoinput = () => {

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodo = () => {
    console.log("Raghuveer")
    let todos = {
      "id":1,
      "title": todo,
      "status": false
    }
    dispatch(add(todos));
    setTodo("");
  }
  return (
    <div>
      <input type='text' placeholder='Add todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleTodo}>Add</button>
    </div>
  )
}

export default Todoinput