import React, { useState } from 'react';
import  {add}  from "./TodoSlice"
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

const Todoinput = () => {

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodo = () => {
    console.log("Raghuveer")
    let todos = {
      "id":uniqid(),
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