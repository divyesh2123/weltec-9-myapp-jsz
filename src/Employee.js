import React, { useEffect, useState } from 'react'
import DisplayData from './DisplayData'

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
            data.map((value,index)=> {

                return(<DisplayData 
                    val={value}
                    myindex={index}
                
                ></DisplayData>)

            })
        }
    </table>
  )
}
