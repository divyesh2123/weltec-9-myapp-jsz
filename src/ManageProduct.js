import React, { useReducer, useState } from 'react'

export default function ManageProduct() {
    const  managestate = (state,action)=>{


        switch(action.type)
        {
          case  'ADDPRODUCT':
    
            let p =[...state];
    
            p.push(action.payload);
    
            return p;
    
          default :
    
          return state;
    
        }
    
        }
   
    const [data,setData] =  useReducer(managestate,[])
 
    console.log(data);
    
     const [input,setInput] = useState('');
 

    const handleSubmit = ()=>
    {

        setData({type:'ADDPRODUCT', payload: input});
    }


  
  return (
    <div>
        
        <input type='text'  onChange={(e)=>{

setInput(e.target.value)
        }}/>

        <input type='button' onClick={handleSubmit} value="SaveInfo" />

    </div>
  )
}
