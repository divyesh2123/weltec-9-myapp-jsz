import React, { useState } from 'react'

export default function Registraion() {

    const [input,setinput] = useState('');

    const handleChange = (e)=> {

        setinput(e.target.value)
    }

    const displayEnterValue = (e)=> {

        e.preventDefault();

        console.log(input);

    }
  return (
    <div>
        <form onSubmit={displayEnterValue}>

                <input type='text' name='fname' onChange={handleChange}/>

                <input type='submit' value='Save' />
        </form>
    </div>
  )
}
