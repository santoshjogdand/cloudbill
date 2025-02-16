import React, { useState } from 'react';

const Sales = () => {
  const [filters, setFilters] = useState({
    amount: '',
    date: '',
    fromDate: '',
    toDate: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return (
    <div className='main bg-blue-100 w-full h-fit pl-[30vh] pb-[100vh]'>
      {/* Title */}
      <div className='title text-[1.5vw] flex justify-center py-5 font-bold'>Sales</div>

      {/* Filter Section */}
      <div className='filters flex justify-around items-center mb-5'>
        {/* Amount Filter */}
        <div className='filter-option'>
          <label htmlFor='amount' className='block text-[2.5vh] font-medium mb-1'>Amount</label>
          <select
            id='amount'
            className='p-1 border border-gray-300 rounded w-36 text-sm'
            value={filters.amount}
            onChange={(e) => handleFilterChange('amount', e.target.value)}
          >
            <option value=''>Select</option>
            <option value='low-high'>Low to High</option>
            <option value='high-low'>High to Low</option>
          </select>
        </div>

        {/* Date Filter */}
        <div className='filter-option'>
          <label htmlFor='date' className='block text-[2.5vh] font-medium mb-1'>Date</label>
          <select
            id='date'
            className='p-1 border border-gray-300 rounded w-36 text-[2vh]'
            value={filters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
          >
            <option value=''>Select</option>
            <option value='newest'>Newest</option>
            <option value='oldest'>Oldest</option>
          </select>
        </div>

        {/* From Date Filter */}
        <div className='filter-option'>
          <label htmlFor='fromDate' className='block text-[2.5vh] font-medium mb-1'>From Date</label>
          <input
            type='date'
            id='fromDate'
            className='p-1 border border-gray-300 rounded w-36 text-[2vh]'
            value={filters.fromDate}
            onChange={(e) => handleFilterChange('fromDate', e.target.value)}
          />
        </div>

        {/* To Date Filter */}
        <div className='filter-option'>
          <label htmlFor='toDate' className='block text-[2.5vh] font-medium mb-1'>To Date</label>
          <input
            type='date'
            id='toDate'
            className='p-1 border border-gray-300 rounded w-36 text-[2vh]'
            value={filters.toDate}
            onChange={(e) => handleFilterChange('toDate', e.target.value)}
          />
        </div>
      </div>

      {/* Display Sales */}
      <div className="mt-5 ml-10">
        {/* Table Columns */}
        <div className='columns mt-10'>
          <table className="table-auto w-[80%] mx-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white text-[2.5vh]">
                <th className="border border-gray-400 px-4 py-2">Date</th>
                <th className="border border-gray-400 px-4 py-2">Customer Name</th>
                <th className="border border-gray-400 px-4 py-2">Collected Amount</th>
                <th className="border border-gray-400 px-4 py-2">Due Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 text-center align-middle">
                <td className="border border-gray-400 px-4 py-2">10/12/2022</td>
                <td className="border border-gray-400 px-4 py-2">Ram Sagar Bhise</td>
                <td className="border border-gray-400 px-4 py-2">20000</td>
                <td className="border border-gray-400 px-4 py-2">2600</td>
              </tr>
              <tr className="hover:bg-gray-100 text-center align-middle">
                <td className="border border-gray-400 px-4 py-2">10/12/2022</td>
                <td className="border border-gray-400 px-4 py-2">Karan Vijay Narote</td>
                <td className="border border-gray-400 px-4 py-2">21233</td>
                <td className="border border-gray-400 px-4 py-2">00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sales;
