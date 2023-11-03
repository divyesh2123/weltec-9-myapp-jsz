import logo from './logo.svg';

import RoutingHome from './RoutingHome';
import Development from './Development';
import Consult from './Consult';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Service from './Service';

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

    <Routes>
      <Route   path="/" element={ <RoutingHome/> } />
      <Route path="service/*" element={ <Service/> }>
             <Route path="development" element={ <Development/> } />
             <Route path="consult" element={ <Consult/> } />              
      </Route>
      <Route path="about" element={ <About/> } />         
    </Routes>   
  </div>
   
  
  );
}

export default App;
