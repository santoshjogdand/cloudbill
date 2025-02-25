import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "", 
    address: "",
  });

  //API URL
  const API_URL = "http://localhost:5000/api/v1/organization";

  // Fetch Customers from API
  useEffect(() => {
    axios.get(`${API_URL}/getCustomers`)
      .then(response => {   
        setCustomers(response.data);
      })
      .catch(error => console.error("Error fetching customers:", error));
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  // Delete Customer
  const handleDelete = (id) => {
    axios.delete(`${API_URL}/deleteCustomer/${id}`)
      .then(() => {
        setCustomers(customers.filter(customer => customer._id !== id));
      })
      .catch(error => console.error("Error deleting customer:", error));
  };

  // Handel edit customer
  const handleEditCustomer = (customer, index) => {
    setNewCustomer({
      name: customer.name,
      email: customer.email,
      phone: customer.phone, 
      address: customer.address,
    });
    setEditingIndex(index);
    setShowAddCustomerForm(true);
  };

  // Add or Update Customer
  const addOrUpdateCustomer = () => {
    if (editingIndex !== null) {
      // Update Customer
      const updatedCustomer = { ...newCustomer, id: customers[editingIndex]._id };
      axios.put(`${API_URL}/updateCustomer/${updatedCustomer.id}`, updatedCustomer)
        .then(() => {
          const updatedCustomers = [...customers];
          updatedCustomers[editingIndex] = updatedCustomer;
          setCustomers(updatedCustomers);
          setEditingIndex(null);
          setShowAddCustomerForm(false);
        })
        .catch(error => console.error("Error updating customer:", error));
    } else {
      // Create Customer
      axios.post(`${API_URL}/createCustomer`, newCustomer)
        .then(response => {
          setCustomers([...customers, response.data]);
          console.log("Customer added successfully"); //Log success message
          setShowAddCustomerForm(false);
        })
        .catch(error => console.error("Error adding customer:", error));
    }

    setNewCustomer({ name: "", email: "", phone: "", address: "" });
  };
  

  return (
    <div>
      <Header/>
      <div className='Main bg-blue-100 w-full h-full pl-[30vh]'>
      <div className='inventory_page p-2'>
        <div className='title flex justify-center text-[1.5vw] font-bold'>
          Customers
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
                placeholder="Search Customer"
                className="pl-10 p-2 border border-gray-300 rounded w-full outline-none text-[2vh] text-gray-700 focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div
              className='add_customer_logo flex gap-2 cursor-pointer mt-2'
              onClick={() => setShowAddCustomerForm(true)}
            >
              <img src="../src/assets/plus.png" className="h-5" alt="plus" />
              <p className='text-[2vh] text-blue-600'>Add Customer</p>
            </div>
          </div>

          {/* Table Columns */}
          <div className='columns mt-10'>
            <table className="table-auto w-[80%] mx-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white text-[2.5vh]">
                  <th className="border border-gray-400 px-4 py-2">Customer Name</th>
                  <th className="border border-gray-400 px-4 py-2">Email</th>
                  <th className="border border-gray-400 px-4 py-2">Contact</th>
                  <th className="border border-gray-400 px-4 py-2">Address</th>
                  <th className="border border-gray-400 px-4 py-2">Edit</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index} className="hover:bg-gray-100 text-center align-middle">
                    <td className="border border-gray-400 px-4 py-2">{customer.name}</td>
                    <td className="border border-gray-400 px-4 py-2">{customer.email}</td>
                    <td className="border border-gray-400 px-4 py-2">{customer.phone}</td>
                    <td className="border border-gray-400 px-4 py-2">{customer.address}</td>
                    <td className="border border-gray-400 px-4 py-2 flex justify-around">
                      <img
                        src="../src/assets/cross.png"
                        alt="Delete"
                        className="h-6 cursor-pointer"
                        onClick={() => handleDelete(customer.id)} // Now it passes the correct ID
                      />

                      <img
                        src="../src/assets/edit.png"
                        alt="Edit"
                        className='h-5 cursor-pointer'
                        onClick={() => handleEditCustomer(customer, index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Product Form */}
          {showAddCustomerForm && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-5 rounded w-[80%]">
                <h2 className="text-xl font-bold mb-4">Add Customer</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Customer Name*"
                    value={newCustomer.name}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 outline-none text-sm text-gray-700 focus:ring-1 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={newCustomer.email}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 outline-none text-sm text-gray-700 focus:ring-1 focus:ring-gray-400"
                  />
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone*"
                    value={newCustomer.phone}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 outline-none text-sm text-gray-700 focus:ring-1 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newCustomer.address}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 outline-none text-sm text-gray-700 focus:ring-1 focus:ring-gray-400"
                  />
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => setShowAddCustomerForm(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addOrUpdateCustomer}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Add Customer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Customers;
