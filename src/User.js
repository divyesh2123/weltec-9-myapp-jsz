import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const User = () => {

  const [data,setData] = useState([]);

  useEffect(()=> {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(y=> {

        setData(y.data);
    })

  },[])
  return (
    <div>{
        data.map((value)=> {

            return (<div>{value.email}</div>)
        })
        
        }</div>
  )
}
