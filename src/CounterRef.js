import React, { useRef } from 'react'

export default function CounterRef() {

    let ref = useRef(0);

    let ref1= useRef(0);

    const handleClick =() => {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
      }

      const mytest = ()=>{

        console.log(ref1.current.value);
      }


  return (
    <>
     <button onClick={handleClick}>
      Click me!
    </button>

    <input type='text' ref={ref1} onChange={mytest}/>
    </>
   
  )
}
