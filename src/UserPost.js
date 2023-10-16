import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

export default function UserPost() {

    const data = useSelector(y=>y.post);

    const dis = useDispatch();

    const [input,setInput] = useState('');

    const changeData = (e)=>{

        setInput(e.target.value);
    }

    const savedata = ()=>{

            dis({type:'ADD_POST', payload: input})


    }


  return (
    <div>
        <input type='text'  onChange={changeData}/>
        <button onClick={savedata}></button>
    </div>
  )
}
