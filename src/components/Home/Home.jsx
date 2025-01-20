import React from 'react';

const Home = () => {
  return (
    <div className='w-full h-full bg-blue-100 flex pt-20 justify-center'>
      <div className='logo space-y-10'>
        {/* First Row */}
        <div className='grid grid-cols-3 gap-[200px]'>
          <div className='text-center'>
            <img src="../src/assets/invoice.png" alt="bill" className='w-20' />
            <label className="block mt-2">Invoice</label>
          </div>
          <div className='text-center'>
            <img src="../src/assets/rating.png" alt="user" className='w-20' />
            <label className="block mt-2">Customers</label>
          </div>
          <div className='text-center'>
            <img src="../src/assets/profit.png" alt="sales" className='w-20' />
            <label className="block mt-2">Sales</label>
          </div>
        </div>

        {/* Second Row */}
        <div className='grid grid-cols-3 gap-x-[200px]'>
          <div className='text-center'>
            <img src="../src/assets/income.png" alt="payment" className='w-20' />
            <label className="block mt-2">Payment</label>
          </div>
          <div className='text-center'>
            <img src="../src/assets/inventory.png" alt="inventory" className='w-20' />
            <label className="block mt-2">Inventory</label>
          </div>
          <div className='text-center'>
            <img src="../src/assets/about.png" alt="information" className='w-20' />
            <label className="block mt-2">About</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
