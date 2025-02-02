import React, { useState } from "react";

const Inventory = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="flex justify-between items-center">
        <span className="font-medium text-lg">Add New Product</span>
        <button onClick={toggleForm} className="focus:outline-none">
          {showForm ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          )}
        </button>
      </div>

      {showForm && (
        <div className="border border-gray-300 rounded-lg p-4 mt-4">
          <form>
            <label className="block mb-2 font-medium">
              Product Name:
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </label>
            <label className="block mb-2 font-medium">
              Quantity:
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </label>
            <label className="block mb-2 font-medium">
              Unit:
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="e.g., 1kg, 2lit"
              />
            </label>
            <label className="block mb-2 font-medium">
              Cost Price:
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </label>
            <label className="block mb-2 font-medium">
              Selling Price:
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
            >
              Add Product
            </button>
          </form>
        </div>
      )}

      <table className="w-full mt-6 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Sr No</th>
            <th className="border border-gray-300 p-2">Product Name</th>
            <th className="border border-gray-300 p-2">Quantity</th>
            <th className="border border-gray-300 p-2">Unit</th>
            <th className="border border-gray-300 p-2">Cost Price</th>
            <th className="border border-gray-300 p-2">Selling Price</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">Sample Product</td>
            <td className="border border-gray-300 p-2">20</td>
            <td className="border border-gray-300 p-2">2kg</td>
            <td className="border border-gray-300 p-2">$80</td>
            <td className="border border-gray-300 p-2">$100</td>
            <td className="border border-gray-300 p-2">
              <button className="text-red-600">Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
