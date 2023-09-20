import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

export default function Login() {

  const [data,setData] =  useState({
        email : "",
        password : ""
    })

    const handleInput = (e)=> {

       
        setData({...data,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=> {

        e.preventDefault();

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
        .then(y=> {

            console.log(y);
        }).catch(y=> {
            swal("Hello world!");
            console.log(y);
        })

    }
  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name="email"  onChange={handleInput}/>
        <input type='text' name="password" onChange={handleInput}/>
        <input type='submit' value="save" />

    </form>
  )
}
