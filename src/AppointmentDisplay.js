import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

export default function AppointmentDisplay(props) {

    const columns = [

        {
            field: "firstName",
            headerName: "firstName",
            width: 90
        },
        {
            field: "lastName",
            headerName: "lastName",
            width: 90
        },
        {
            field: "city",
            headerName: "city",
            width: 90
        },
        {
            field: "state",
            headerName: "state",
            width: 90
        },
        {
            field: "address1",
            headerName: "address1",
            width: 90
        },
        {
            field: "address2",
            headerName: "address another",
            width: 90
        },
        {
            field : "delete",
            headerName : "delete",
            renderCell: (params) => {

                console.log(params);
                 // you will find row info in params
                return (<button onClick={()=>{
        
                    props.remove(params.row.id);
        
                  }}>Delete</button>)
              }

        },
        {
            field : "edit",
            headerName : "edit",
            renderCell: (params) => {

                console.log(params);
                 // you will find row info in params
                return (<button onClick={()=>{
        
                    props.edit(params.row.id);
        
                  }}>edit</button>)
              }

        }
        
    ]

    console.log(props.data);
  return (
    <div>
  <DataGrid
    
    rows={props.data}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    ></DataGrid>


    </div>
  )
}
