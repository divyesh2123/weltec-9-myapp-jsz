import React from 'react'
import data from './myData.js'

export default function MyDisplay() {
  return (
    <table>{
            data.map((value)=> {

                return (<tr><td>{value.Id}</td> <td>{value.title}</td></tr>)

            })
        }</table>
  )
}
