import React, { useState } from "react";

const Inventory = () => {


  return (
    <div className='Main bg-blue-100 w-full h-full pl-[30vh]'>
      <div className='inventory_page p-2'>
        <div className='title flex justify-center text-xl font-bold'>
          Inventory
        </div>
        <div className="mt-5 ml-10">
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
                placeholder="Search Product"
                className="pl-10 p-2 border border-gray-300 rounded w-full outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className='add_customer_logo flex gap-2 cursor-pointer mt-2'>
              <img src="../src/assets/plus.png" className="h-5" alt="plus" />
              <p className='text-sm text-blue-600'>Add Product</p>
            </div>
          </div>

          {/* Table Columns */}
          <div className='columns mt-10'>
            <table className="table-auto w-[80%] mx-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-400 px-4 py-2">Product Name</th>
                  <th className="border border-gray-400 px-4 py-2">NOS</th>
                  <th className="border border-gray-400 px-4 py-2">Quantity</th>
                  <th className="border border-gray-400 px-4 py-2">Cost Price</th>
                  <th className="border border-gray-400 px-4 py-2">Selling Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 text-center align-middle">
                  <td className="border border-gray-400 px-4 py-2">Seed Oil</td>
                  <td className="border border-gray-400 px-4 py-2">100</td>
                  <td className="border border-gray-400 px-4 py-2">2lit</td>
                  <td className="border border-gray-400 px-4 py-2">250</td>
                  <td className="border border-gray-400 px-4 py-2">270</td>
                </tr>
                <tr className="hover:bg-gray-100 text-center align-middle">
                  <td className="border border-gray-400 px-4 py-2">Ashirwad Atta</td>
                  <td className="border border-gray-400 px-4 py-2">200</td>
                  <td className="border border-gray-400 px-4 py-2">5kg</td>
                  <td className="border border-gray-400 px-4 py-2">120</td>
                  <td className="border border-gray-400 px-4 py-2">130</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
