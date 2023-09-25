import React, { useEffect, useState } from 'react'
import authFetchWithInterSepetor from './interceptors'

export default function ListWithAuthorization() {

  const [data,setData] =  useState([])

  useEffect(()=> {

    authFetchWithInterSepetor.get("/accounts")
    .then(y=> {
        console.log(y);
    })
  },[])
  return (
    <div>ListWithAuthorization</div>
  )
}
