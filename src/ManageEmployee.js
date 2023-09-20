import React, { useState } from 'react'
import AddEditEmployee from './AddEditEmployee'
import ListEmployee from './ListEmployee'

export default function ManageEmployee
() {

    const [data,setData] = useState([])
  return (
    <div>

        <AddEditEmployee data={data} setData ={setData}/>

        <ListEmployee data={data}/>
        
    </div>
  )
}
