import React from "react";
import App from "../App";
import Apropos from "../pages/Apropos";
import ErrorPage from "../pages/ErrorPage";
import { 
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: '/apropos',
      element: <Apropos />
    }
  ])

  function CustomRouter() {
    return (
        <RouterProvider router={router} />
    )
  }

  export default CustomRouter
