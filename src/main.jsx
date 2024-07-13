import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Pages/Layout/Main';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error/>,
    children:[
      {
        path:"/home",
        element:<Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:'/services/:servicesId',
        element:<ServiceDetails></ServiceDetails>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path: '/checkout',
        element:<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
