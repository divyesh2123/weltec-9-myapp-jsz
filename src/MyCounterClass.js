import React, { Component } from 'react'
import MyDisplayClass from './MyDisplayClass';

export default class MyCounterClass extends Component {

    state = {

        favoritefood: "burger"
    }

   static getDerivedStateFromProps(props, state)
   {
    return {favoritefood: props.favfod };
   }  




  

   
    
    handleCounter = ()=>{

        this.setState({...this.state, counter : this.state.counter +1});
    }
  render() {

 
    return (
      <div>d-{this.state.favoritefood}
        {/* <button onClick={this.handleCounter}>+</button>
        {
            this.state.data.map((y)=>{



                return (<div>
<MyDisplayClass data={y}></MyDisplayClass>

                </div>)


            })

        } */}

      </div>
    )
  }
}
