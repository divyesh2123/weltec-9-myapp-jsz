import React, { useState } from 'react'

export default function MyCounter() {
  
    alert("dd");

   const [counter,setCounter]=  useState(0)

    const increment = ()=> {
       
        setCounter(counter+1);
    }
  return (
    <div>{counter}
    
    <button onClick={increment()}>+</button>
    </div>
  )
}
