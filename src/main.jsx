import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomRouter from './router/CustumRouter.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomRouter />
  </React.StrictMode>,
)
