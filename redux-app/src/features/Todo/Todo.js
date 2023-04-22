import React, { useState } from 'react'
import Todoinput from './Todoinput'

const Todo = () => {

  const [data, setData] = useState([]);
  

  return (
    <div>
        <Todoinput/>
    </div>
  )
}

export default Todo