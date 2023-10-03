import React, { useState } from 'react'
import Child1 from './Child1'
import UserContext from './UserContext';

export default function Parent() {

    const [data,setData] = useState({

        firstName : "d",
        lastName : "patel"

    });
  return (
    <UserContext.Provider value={data}>
        <Child1 />
        
    </UserContext.Provider>
  )
}
