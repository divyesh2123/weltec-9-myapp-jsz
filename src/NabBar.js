import React, { useContext } from 'react'
import LanguageContext from './Language'

export default function NabBar() {

  const {data,setData} = useContext(LanguageContext)

    const handleLanguage=(e)=>{

        setData(e.target.value)

    }
  return (
    <div>
        <select onChange={handleLanguage}>
            <option value="EN">English</option>
            <option value="GJ">Gujrati</option>
        </select>
    </div>
  )
}
