import React, { useState, useEffect } from 'react';

const Customers = () => {
  // Placeholder for customer data
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch customers (replace with real API call later)
    // fetch('/api/customers')
    //   .then(response => response.json())
    //   .then(data => setCustomers(data));
    
    setCustomers([]); // Start with empty data for now
  }, []);

  return (
    <div className='Main bg-blue-100 w-full h-full'>
      <div className='customer_page p-2'>
        <div className='title flex justify-center text-xl font-bold'>
          Customer Details
        </div>
        <div className="product_details_box mt-5 ml-10">
          {/* Search Bar */}
          <div className="flex items-center gap-5 mt-5">
            <label htmlFor="cname" className="text-sm font-medium">Search Customer</label>
            <input
              type="text"
              id="cname"
              placeholder='Search Customer by name, id etc...'
              className="p-1 border border-gray-300 rounded w-[60%]"
            />
            <div className='add_customer_logo flex gap-2 ml-20 cursor-pointer'>
              <img src="../src/assets/plus.png" className="h-5" alt="plus" />
              <p className='text-sm text-blue-600 hover:underline'>Add Customer</p>
            </div>
          </div>

          {/* Table Columns */}
          <div className='columns mt-10'>
            <table className="table-auto w-[80%] mx-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">Name</th>
                  <th className="border border-gray-400 px-4 py-2">Rate</th>
                  <th className="border border-gray-400 px-4 py-2">Quantity</th>
                  <th className="border border-gray-400 px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {customers.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No data available
                    </td>
                  </tr>
                ) : (
                  customers.map((customer, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">{customer.name}</td>
                      <td className="border border-gray-400 px-4 py-2">{customer.rate}</td>
                      <td className="border border-gray-400 px-4 py-2">{customer.quantity}</td>
                      <td className="border border-gray-400 px-4 py-2">{customer.amount}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
