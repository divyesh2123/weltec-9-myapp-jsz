import React from 'react'

export default function DisplayData({myindex,val}) {
  return (
    <tr><td>{myindex}</td><td>{val.body}</td></tr>
  )
}
