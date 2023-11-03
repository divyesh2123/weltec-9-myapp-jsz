import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Service() {
  return (
    <div>
    <h2>Our Services</h2>       
      <div>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="service/development">Services</Link>
        </li>
        <li>
          <Link to="abservice/consult">About</Link>
        </li>          
      </ul>
    </nav>


       <Outlet></Outlet>

</div>
</div>
  )
}
