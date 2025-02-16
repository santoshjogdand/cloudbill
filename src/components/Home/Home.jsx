import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='w-full h-full bg-blue-100 flex pt-20 justify-center pl-[30vh]'>
      <div className='logo space-y-10'>
        {/* First Row */}
        <div className='grid grid-cols-3 gap-[200px]'>
          <div className='text-center'>
            <Link to="/Invoice"><img src="../src/assets/invoice.png" alt="bill" className='w-[7vw]' /></Link>
            <Link to="/Invoice"><label className="block mt-2 text-lg">Invoice</label></Link>
          </div>
          <div className='text-center'>
            <Link to="/Customers"><img src="../src/assets/rating.png" alt="user" className='w-[7vw]' /></Link>
            <Link to="/Customers"><label className="block mt-2 text-lg">Customers</label></Link>
          </div>
          <div className='text-center'>
            <Link to="/Sales"><img src="../src/assets/profit.png" alt="sales" className='w-[7vw]' /></Link>
            <Link to="/Sales"><label className="block mt-2 text-lg">Sales</label></Link>
          </div>
        </div>

        {/* Second Row */}
        <div className='grid grid-cols-3 gap-x-[200px]'>
          <div className='text-center'>
            <Link to="/Inventory"><img src="../src/assets/inventory.png" alt="inventory" className='w-[7vw]' /></Link>
            <Link to="/Inventory"><label className="block mt-2 text-lg">Inventory</label></Link>
          </div>
          <div className='text-center'>
            <Link to="/About"><img src="../src/assets/about.png" alt="information" className='w-[7vw]' /></Link>
            <Link to="/About"><label className="block mt-2 text-lg">Account</label></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
