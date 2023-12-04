import React from "react";
import App from "../App";
import Apropos from "../pages/Apropos";
import ErrorPage from "../pages/ErrorPage";
import LgmtFiche from "../pages/LgmtFiche";
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
    },
    {
      path: "/fichesLogements/:id",
      element: <LgmtFiche />
    }
  ])

  function CustomRouter() {
    return (
        <RouterProvider router={router} />
    )
  }

  export default CustomRouter
