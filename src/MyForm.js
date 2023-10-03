import React, { useContext } from 'react'
import LanguageContext from './Language'

export default function MyForm() {

    const {data} = useContext(LanguageContext);

    const mylanguage = {

        "EN" : {

                firstName : "First Name",
                lastName : "Last Name "
        },

        "GJ" : {
            firstName : "firstName in gujrati",
            lastName : "Name in gujrati"

        }


    }
  return (
    <div>
            <label>
                {mylanguage[data].firstName}
            </label>

    </div>
  )
}
