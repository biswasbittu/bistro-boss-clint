import {
    createBrowserRouter 
  } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>

        },
        {
          path:'/menu',
          element:<Menu/>
        },
        {
          path:'/order/:category',
          element:<Order/>
        }
      ]
      
      
    },
    {
      
        path:"*",
        element:<Error/>
      
    }
]);
