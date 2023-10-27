import React from 'react'

import {connect, useDispatch,useSelector} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    count: state.conuter
  }
}
 function MyCounterSaga({ count, dispatch }) {

   

    const myinc= ()=>{

      dispatch({type: 'INCREMENT_ASYNC'})
    }
    
  return (
    <div>{count}
    
        <button onClick={myinc}>+</button>
    </div>
  )
}



const mapDispatchToProps = {}
export default connect(mapStateToProps) (MyCounterSaga)