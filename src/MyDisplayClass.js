import React, { Component } from 'react'

export default class MyDisplayClass extends Component {
  render() {
    return (
      <div>{this.props.data.title} ----
      
      {this.props.data.price}
      </div>
    )
  }
}
