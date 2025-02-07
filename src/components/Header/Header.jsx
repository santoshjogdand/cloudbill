import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='main w-[30vh] h-[100vh] bg-blue-950 m-0 fixed top-0 left-0'>
        <div className='left'>
          <div className='logo'>
            <img src="" className='' alt="" />
            <p className='text-white'>CloudBill</p>
          </div>
          <div className='features'>
            <ul className='text-white'>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/home.svg" alt="" className='w-4 h-4' />
                <Link to="/" className='text-white'>Home</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/sales.svg" alt="" className='w-4 h-4' />
                <Link to="/Invoice" className='text-white'>Invoice</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/customer.svg" alt="" className='w-4 h-4' />
                <Link to="./Customers" className='text-white'>Customers</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/payments.svg" alt="" className='w-4 h-4' />
                <Link to="/Inventory" className='text-white'>Inventory</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/reports.svg" alt="" className='w-4 h-4' />
                <Link to="/Sales" className='text-white'>Sales</Link>
              </li>
              {/* <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/payments.svg" alt="" className='w-4 h-4' />
                <Link to="/Payments" className='text-white'>Payments</Link>
              </li> */}
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/about.svg" alt="" className='w-4 h-4' />
                <Link to="/About" className='text-white'>Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
