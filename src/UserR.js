import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USERSUC } from './action/userAction';

export default function UserR() {

 const dis = useDispatch();

 const d = useSelector(y=>y.user.data)

 console.log(d)

  useEffect(()=>{

    fetch("https://fakestoreapi.com/products")
    .then(y=>y.json())
    .then(y=>{

      dis(USERSUC(y))
    })

  },[])
  return (
    <div>UserR</div>
  )
}
