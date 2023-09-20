import React, { useState } from 'react'

export default function AddEditEmployee(props) {
    const [data,setData] = useState({
        firstName : "",
        lastName : ""
    })

    const handleSubmit = (e)=> {
        e.preventDefault();

        let t = [...props.data];
        t.push(data);

        props.setData(t);
    }
  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name='fistName' />
        <input type='text'  name='lastName'/>

        <input type='submit' value="save" />
        
    </form>
  )
}
