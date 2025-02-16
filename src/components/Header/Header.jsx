import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='main w-[30vh] h-[100vh] bg-blue-950 m-0 fixed top-0 left-0'>
        <div className='left'>
          <div className='logo pl-2 pt-2'>
            <img src="" className='' alt="" />
            <p className='text-white text-[3vh]'>CloudBill</p>
          </div>
          <div className='features'>
            <ul className='text-white'>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/home.svg" alt="" className='w-[1.5vw]' />
                <Link to="/" className='text-white text-[3vh]'>Home</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/sales.svg" alt="" className='w-[1.5vw]' />
                <Link to="/Invoice" className='text-white text-[3vh]'>Invoice</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/customer.svg" alt="" className='w-[1.5vw]' />
                <Link to="./Customers" className='text-white text-[3vh]'>Customers</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/payments.svg" alt="" className='w-[1.5vw]' />
                <Link to="/Inventory" className='text-white text-[3vh]'>Inventory</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/reports.svg" alt="" className='w-[1.5vw]' />
                <Link to="/Sales" className='text-white text-[3vh]'>Sales</Link>
              </li>
              <li className='flex items-center space-x-3 m-3'>
                <img src="../src/assets/about.svg" alt="" className='w-[1.5vw]' />
                <Link to="/About" className='text-white text-[3vh]'>Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
