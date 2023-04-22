import React, { useState } from 'react'
import Todoinput from './Todoinput'

const Todo = () => {

  const [data, setData] = useState([]);


  return (
    <div>
        <Todoinput/>
        {
          data.length > 0 && data.map((el, index)=>{
            return (
              <div key={index}>
                
              </div>
            )
          })
        }
    </div>
  )
}

export default Todo