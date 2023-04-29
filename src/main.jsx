import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/root'
import CartProvider from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider><RouterProvider router={routes} /></CartProvider>
  </React.StrictMode>
)
