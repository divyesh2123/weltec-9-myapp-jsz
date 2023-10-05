import React, { useCallback, useEffect, useState } from 'react'
import Reminder from './Reminder';

export default function RemiderList() {

    let d=0;
   
   const [data,setData] = useState([]);
    
   
       

   const [input,setInput]= useState('');

   const SaveInformation = ()=>{

        let p = [...data];
        p.push(input);
   }

   const deleteInformation = useCallback(()=>{

   },[])

  return (
    <div>
        <input type='text' value={input} onChange={(e)=>{

setInput(e.target.value)

        }}/>

        <button onClick={SaveInformation}>Save Information</button>

        <Reminder  deleteInformation={deleteInformation} data={data}/>


    </div>
  )
}
