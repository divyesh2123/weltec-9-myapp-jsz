import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { BYNUM, DEC, INC } from './action/counteraction';

export default function Counter() {

    const d = useSelector(y=>y.counter);
   const dis = useDispatch();
   const [input,setInput] = useState(0);

   const myincetment = ()=>{

    dis(INC())

   }
   const mydecrement = ()=>{
    dis(DEC())
   }

   const addByNumber = ()=>{

    dis(BYNUM(input))
   }
  return (
    <div>{d}

      <input type='text' onChange={(e)=>{
        
        setInput(e.target.value);
      }}   />
        <button onClick={myincetment}>+</button>
        <button onClick={mydecrement}>-</button>
        <button onClick={addByNumber}>+by</button>
    </div>
  )
}
