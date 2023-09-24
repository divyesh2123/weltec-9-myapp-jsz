import React, { useEffect, useState } from 'react'
import axios from 'axios'
import authFetch from './authFetch';

export default function ListAccount() {

    const [data,setData] = useState([]);

    useEffect(()=> {

        authFetch.get("https://real-pear-fly-kilt.cyclic.app/accounts").then(y=> {

            console.log(y.data);
        })
        

    },[])
  return (
    <div>ListAccount</div>
  )
}
