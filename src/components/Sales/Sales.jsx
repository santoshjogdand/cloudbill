import React, { useState } from 'react';

const Sales = () => {
  // State to manage the form fields
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  });

  // Handler to clear all fields
  const clearCustomerDetails = () => {
    setCustomerDetails({
      name: '',
      phone: '',
      address: '',
      email: '',
    });
  };

  // Handler to update individual fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <div className='main h-full m-0 p-0'>
      <div className='left h-full w-full bg-blue-100 pt-3 pl-3'>
        <div className='customer_details p-2 h-[35vh] w-full'>
          <div className="title text-lg mb-4 flex gap-[58vw]">
            <div>CUSTOMER DETAILS</div>
            <div className='flex gap-2'>
              <img src="../src/assets/plus.png" className="h-5" alt="plus" />
              <p className='text-sm'>Add Customer</p>
            </div>
          </div>
          <div className="customer_details_box grid grid-cols-2 gap-10">
            <div className="flex items-center gap-5">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                id="phone"
                value={customerDetails.phone}
                onChange={handleInputChange}
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="address" className="text-sm font-medium">Address</label>
              <input
                type="text"
                id="address"
                value={customerDetails.address}
                onChange={handleInputChange}
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
          </div>
          <div className='clear_customer flex justify-center mt-5'>
            <button
              className='bg-green-500 text-white rounded px-4 py-1 hover:bg-green-600 hover:scale-105 transition transform'
              onClick={clearCustomerDetails}
            >
              Clear
            </button>
          </div>
        </div>
        <div className='product_details p-2 mt-5'>
          <div className="title text-lg flex gap-[58vw]">
            <div>PRODUCT DETAILS</div>
            <div className='flex gap-2'>
              <img src="../src/assets/plus.png" className="h-5" alt="plus" />
              <p className='text-sm'>Add Product</p>
            </div>
          </div>
          <div className="product_details_box mt-5">
            <div className="flex items-center gap-5 mt-5">
              <label htmlFor="cname" className="text-sm font-medium">Search Product</label>
              <input
                type="text"
                id="cname"
                placeholder='Search product by name, organisation or Description'
                className="p-1 border border-gray-300 rounded w-[60%]"
              />
            </div>
            <div className='columns mt-10'>
              <ul className='flex justify-around'>
                <li>Name</li>
                <li>Rate</li>
                <li>Quantity</li>
                <li>Amount</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
