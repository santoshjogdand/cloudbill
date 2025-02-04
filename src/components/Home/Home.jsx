import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='w-full h-full bg-blue-100 flex pt-20 justify-center'>
      <div className='logo space-y-10'>
        {/* First Row */}
        <div className='grid grid-cols-3 gap-[200px]'>
          <div className='text-center'>
            <Link to="/Invoice"><img src="../src/assets/invoice.png" alt="bill" className='w-20' /></Link>
            <Link to="/Invoice"><label className="block mt-2">Invoice</label></Link>
          </div>
          <div className='text-center'>
            <Link to="/Customers"><img src="../src/assets/rating.png" alt="user" className='w-20' /></Link>
            <Link to="/Customers"><label className="block mt-2">Customers</label></Link>
          </div>
          <div className='text-center'>
            <Link to="/Sales"><img src="../src/assets/profit.png" alt="sales" className='w-20' /></Link>
            <Link to="/Sales"><label className="block mt-2">Sales</label></Link>
          </div>
        </div>

        {/* Second Row */}
        <div className='grid grid-cols-3 gap-x-[200px]'>
          <div className='text-center'>
            <Link to="/Payments"><img src="../src/assets/income.png" alt="payment" className='w-20' /></Link>
            <Link to="/Payments"><label className="block mt-2">Payment</label></Link>
          </div>
          <div className='text-center'>
            <Link to="/Inventory"><img src="../src/assets/inventory.png" alt="inventory" className='w-20' /></Link>
            <Link to="/Inventory"><label className="block mt-2">Inventory</label></Link>
          </div>
          <div className='text-center'>
            <Link to="/About"><img src="../src/assets/about.png" alt="information" className='w-20' /></Link>
            <Link to="/About"><label className="block mt-2">About</label></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
