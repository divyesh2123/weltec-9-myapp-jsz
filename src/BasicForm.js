import React from 'react'
import TextField from '@mui/material/TextField';

export default function BasicForm() {
  return (
   <>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
   </>
  )
}
