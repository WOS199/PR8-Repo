import React from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Lodging from "../pages/lodging/Lodging";
import { 
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/About',
      element: <About />
    },
    {
      path: "/Lodging/:id",
      element: <Lodging />
    }
  ])

  function CustomRouter() {
    return (
        <RouterProvider router={router} />
    )
  }

  export default CustomRouter
