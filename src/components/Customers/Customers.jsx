import React, { useState, useEffect } from 'react';

const Customers = () => {


  return (
    <div className='Main bg-blue-100 w-full h-full'>
      <div className='customer_page p-2'>
        <div className='title flex justify-center text-xl font-bold'>
          Customer Details
        </div>
        <div className="product_details_box mt-5 ml-10">
          {/* Search Bar */}
          <div className="searchandadd flex justify-center gap-10 mt-5">
            <div className="search relative w-full max-w-xs">
              <img
                src="../src/assets/search.svg"
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              />
              <input
                type="text"
                placeholder="Customer Name"
                className="pl-10 p-2 border border-gray-300 rounded w-full outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className='add_customer_logo flex gap-2 cursor-pointer mt-2'>
              <img src="../src/assets/plus.png" className="h-5" alt="plus" />
              <p className='text-sm text-blue-600'>Add Customer</p>
            </div>
          </div>

          {/* Table Columns */}
          <div className='columns mt-10'>
            <table className="table-auto w-[80%] mx-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-400 px-4 py-2">Name</th>
                  <th className="border border-gray-400 px-4 py-2">Contact</th>
                  <th className="border border-gray-400 px-4 py-2">Email</th>
                  <th className="border border-gray-400 px-4 py-2">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2">Ram Sagar Bhise</td>
                  <td className="border border-gray-400 px-4 py-2">9172198021</td>
                  <td className="border border-gray-400 px-4 py-2">rambhise@gmail.com</td>
                  <td className="border border-gray-400 px-4 py-2">Alandi,Pune</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2">Karan Vijay Narote</td>
                  <td className="border border-gray-400 px-4 py-2">9595009932</td>
                  <td className="border border-gray-400 px-4 py-2">karannarote@gmail.com</td>
                  <td className="border border-gray-400 px-4 py-2">khed,Pune</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
