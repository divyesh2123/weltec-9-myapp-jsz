import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class BuggyCounnter extends Component {
  
    constructor(props) { 
        super(props); 
        this.state = { counter: 0 }; 
        this.handleClick = this.handleClick.bind(this); 
      } 
      
      handleClick() { 
        this.setState(({ counter }) => ({ 
          counter: counter + 1 
        })); 
      } 

  render() {
   
    if (this.state.counter === 3) { 
  
        // Simulate a JS error 
        throw new Error('Crashed!!!!'); 
      } 
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>; 

  }
}
