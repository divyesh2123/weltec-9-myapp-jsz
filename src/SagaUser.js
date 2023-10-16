import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'

export default function SagaUser() {

    const d = useSelector(y=>y.sagauser);

    const dis = useDispatch();

    console.log(d);

    useEffect(()=>{

        dis({type:"GET_USERS_REQUESTED"});


    },[])

    
  return (
    <div>SagaUser</div>
  )
}
