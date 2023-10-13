import React from 'react'

import {useDispatch,useSelector} from 'react-redux'

export default function MyCounterSaga() {

    const dis = useDispatch();

    const counter= useSelector(y=>y.counter)

    const myinc= ()=>{

        dis({type: 'INCREMENT_ASYNC'})
    }
    
  return (
    <div>{counter}
    
        <button onClick={myinc}>+</button>
    </div>
  )
}
