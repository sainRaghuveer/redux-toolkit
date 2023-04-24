import React, { useState } from 'react'
import Todoinput from './Todoinput'
import { useSelector } from 'react-redux';

const Todo = () => {

  // const [data, setData] = useState([]);

  const data = useSelector((store) => {
    return store.todo.todo
  });


  return (
    <div>
        <Todoinput/>
        {
          data.length > 0 && data.map((el, index)=>{
            return (
              <div key={index}>
                <p>{el.title}</p>
                <p>{el.status ? "Pending" : "Completed"}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default Todo