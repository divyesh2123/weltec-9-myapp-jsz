import logo from './logo.svg';
import { useForm } from 'react-hook-form';

import Basic from './Basic';
import MyEmp from './MyEmp';
import { useState } from 'react';
import LanguageContext from './Language';
import NabBar from './NabBar';
import MyForm from './MyForm';

function App() {

   const [data,setData] = useState('EN');
  return (
    <LanguageContext.Provider value={{data,setData}}>

      <NabBar/>

      <MyForm/>

    </LanguageContext.Provider>
  
  );
}

export default App;
