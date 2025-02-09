import React, { useState } from 'react';

const Customers = () => {
  const [showAddCustomerBlock, setShowAddCustomerBlock] = useState(false);

  // State for managing new customer input data
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  // State for storing customer list
  const [customers, setCustomers] = useState([]); // Initially empty array

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  // Handle Add Customer logic
  const handleAddCustomer = () => {
    if (
      newCustomer.name &&
      newCustomer.phone &&
      newCustomer.email &&
      newCustomer.address
    ) {
      setCustomers([...customers, newCustomer]);
      setNewCustomer({ name: '', phone: '', email: '', address: '' });
      setShowAddCustomerBlock(false); // Close the form after adding
    } else {
      alert('Please fill in all fields before adding the customer.');
    }
  };

  return (
    <div className="Main bg-blue-100 w-full h-fit pb-[80vh] pl-[30vh]">
      <div className="customer_page p-2">
        <div className="title flex justify-center text-xl font-bold">
          Customer Details
        </div>
        <div className="mt-5">
          {/* Search Bar and Add Customer Button */}
          <div className="searchandadd flex justify-center gap-10 mt-5">
            <div className="search relative w-full max-w-xs">
              <img
                src="../src/assets/search.svg"
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search Customer"
                className="pl-10 p-2 border border-gray-300 rounded w-full outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div
              className="add_customer_logo flex gap-2 cursor-pointer mt-2"
              onClick={() => setShowAddCustomerBlock(!showAddCustomerBlock)}
            >
              <img src="../src/assets/plus.png" className="h-5" alt="plus" />
              <p className="text-sm text-blue-600">Add Customer</p>
            </div>
          </div>

          {/* Add Customer Input Block */}
          {showAddCustomerBlock && (
            <div className='w-[80vw] flex justify-center'>
              <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
                <h2 className="text-lg font-semibold mb-4">Add New Customer</h2>
                <form className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newCustomer.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      className="pl-3 p-2 border border-gray-300 rounded w-[30vw] outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={newCustomer.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone"
                      className="pl-3 p-2 border border-gray-300 rounded w-[30vw] outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={newCustomer.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                      className="pl-3 p-2 border border-gray-300 rounded w-[30vw] outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={newCustomer.address}
                      onChange={handleInputChange}
                      placeholder="Enter Address"
                      className="pl-3 p-2 border border-gray-300 rounded w-full outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleAddCustomer}
                      className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
                    >
                      Add Customer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Table Columns */}
          <div className="columns mt-10">
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
                {customers.length > 0 ? (
                  customers.map((customer, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 text-center align-middle"
                    >
                      <td className="border border-gray-400 px-4 py-2">
                        {customer.name}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {customer.phone}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {customer.email}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {customer.address}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      className="border border-gray-400 px-4 py-2 text-center"
                      colSpan="4"
                    >
                      No customers found. Please add a customer.
                    </td>
                  </tr>
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
