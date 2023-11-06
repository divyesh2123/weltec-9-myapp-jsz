import logo from './logo.svg';

import RoutingHome from './RoutingHome';
import Development from './Development';
import Consult from './Consult';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Service from './Service';
import MyRoutes from './MyRoutes';

function App() {

   
  return (

    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="service">Services</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>          
      </ul>
    </nav>

    {MyRoutes()}
  </div>
   
  
  );
}

export default App;
