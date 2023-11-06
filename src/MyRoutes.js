import React from 'react'
import { useRoutes } from 'react-router-dom'
import RoutingHome from './RoutingHome'
import Service from './Service'
import Consult from './Consult'

export default function MyRoutes() {

   const element = useRoutes([

    {
        path: "/",
        element: <Service />,
        children: [
          {
            path: "messages",
            element: <Development />,
          },
          { path: "tasks", element: <Consult /> },
        ],
      },
      { path: "team", element: <RoutingHome /> },

   ])
   return element;
}
