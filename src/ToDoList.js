import React, { useState } from 'react'
import ToDOItem from './ToDOItem';

export default function ToDoList() {

   
  const [data,setData] =  useState([]);
  let [input,setInput]= useState('');

  const deleteItem = ()=> {

  }

  const handleInput= (e)=> {
  
    setInput(e.target.value);
  }

  const saveInf = ()=> {

 

    let p = [...data];

   
    p.push(input);
    
    setData(p);

  }


  return (
    <div>

        {
            data.map((p)=> {

                return (<>{p}</>)

            })

        }
        <input type='text' onChange={handleInput}/>

        <input type='button' onClick={saveInf} value="save" />
        <ToDOItem mydata={{data}} remove={deleteItem}/>
        
    </div>
  )
}
