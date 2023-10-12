import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getUser } from './asncAction/myuser';

export default function MyUser() {

    const data = useSelector(y=>y.myuser);

    console.log(data);

    const dis = useDispatch();

    useEffect(()=>{

        dis(getUser())

    },[])
  return (
    <div>MyUser</div>
  )
}
