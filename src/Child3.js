import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function Child3() {
    
   const data=  useContext(UserContext);

   console.log(data);
  return (
    <div>Child3</div>
  )
}
