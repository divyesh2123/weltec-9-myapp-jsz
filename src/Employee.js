import React, { useEffect, useState } from 'react'

export default function Employee() {

   const [data,setData]= useState([])

    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(y=>y.json())
        .then(y=> {
            setData(y)
        })

    },[])
  return (
    <table>
        
        {
            data.map((value)=> {

                return(<tr><td>{value.body}</td></tr>)

            })
        }
    </table>
  )
}
