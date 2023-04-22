import React, { useState } from 'react'

const Todoinput = () => {
  
  const [todo, setTodo] = useState("");

const handleTodo = () => {

}
  return (
    <div>
        <input type='text' placeholder='Add todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={handleTodo}>Add</button>
    </div>
  )
}

export default Todoinput