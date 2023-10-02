import React, { useEffect } from 'react'
 function ToDOItem(props) {
    console.log(props);

    useEffect(()=> {

        console.log("This is the useEffect");
    },[props])


  return (
    <div>ToDOItem</div>
  )
}

export default React.memo(ToDOItem,(pre,next)=> {

    console.log(pre);
    console.log(next);
    if(pre.mydata.data.length == next.mydata.data.length)
    {
    return true;
    }
    else
    {
        return false;
    }

});
