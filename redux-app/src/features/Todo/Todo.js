import React, { useEffect, useState } from 'react'
import Todoinput from './Todoinput'
import { useSelector } from 'react-redux';

const Todo = () => {

  const [data, setData] = useState([]);

  // const data = useSelector((store) => {
  //   return store.todo.todo
  // });

const getData=async()=>{

  let res= await fetch(`https://jsonplaceholder.typicode.com/posts`)

  let data=await res.json();
  setData(data)
  console.log(data)
}

useEffect(()=>{
  getData();
},[])

  return (
    <div style={{border:"1px solid gray"}}>
        <Todoinput/>
        {
          data.length > 0 && data.map((el, index)=>(
            <p key={index} style={{border:"1px solid gray", textAlign:"left"}}>{el.id}{"."}{" "}{el.title}</p>
          ))
        }


    </div>
  )
}

export default Todo