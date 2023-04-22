import React, { useState } from 'react'

const Todoinput = () => {
  const [todo, setTodo] = useState("");
  return (
    <div>
        <input type='text' placeholder='Add todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button>Add</button>
    </div>
  )
}

export default Todoinput