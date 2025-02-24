import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Customers from './components/Customers/Customers.jsx'
import Payments from './components/Payments/Payments.jsx'
import Sales from './components/Sales/Sales.jsx'
import About from './components/About/About.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Invoice from './components/Invoice/Invoice.jsx'
import Signup from './components/Signup/Signup.jsx'
import Login from "./components/Login/Login.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"/customers",
        element:<Customers />
      },
      {
        path:"/payments",
        element:<Payments />
      },
      {
        path:"/invoice",
        element:<Invoice />
      },
      {
        path:"/sales",
        element:<Sales />
      },
      {
        path:"/inventory",
        element:<Inventory />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
