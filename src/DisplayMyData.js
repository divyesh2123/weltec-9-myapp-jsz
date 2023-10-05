import React, { useEffect, useMemo, useState } from 'react'

import { DataGrid,  } from "@mui/x-data-grid";
export default function DisplayMyData() {

        const[rows,setrows] = useState([]);

      useEffect(()=>{

        fetch("http://jsonplaceholder.typicode.com/photos")
        .then(y=>y.json())
        .then(y=> {
            setrows(y)
        })

      })
      
    
      const columns = useMemo(() => [
        { field: "albumId", hide: true },
        { field: "id", headerName: "ID", width: 150 },
        { field: "title", headerName: "Title", width: 150 },
        { field: "url", headerName: "URL", width: 150,
        renderCell: (params) => (
          
             
                <img src={params.value} />
           
          ),
    
    
    
    },
        { field: "thumbnailUrl", headerName: "thumbnailUrl", width: 150 }
      ], []);


  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
