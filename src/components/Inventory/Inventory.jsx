import React, { useState } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([
    { name: "Seed Oil", nos: 100, quantity: "2lit", costPrice: 250, sellingPrice: 270 },
    { name: "Ashirwad Atta", nos: 200, quantity: "5kg", costPrice: 120, sellingPrice: 130 },
  ]);

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    taxRate: "",
    taxType: "",
    supplier: "",
    batchNumber: "",
    manufacturer: "",
    description: "",
    costPrice: "",
    sellingPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.quantity && newProduct.costPrice && newProduct.sellingPrice) {
      setProducts([...products, {
        name: newProduct.name,
        nos: newProduct.quantity,
        quantity: newProduct.quantity,
        costPrice: newProduct.costPrice,
        sellingPrice: newProduct.sellingPrice,
      }]);
      setNewProduct({
        name: "",
        category: "",
        quantity: "",
        taxRate: "",
        taxType: "",
        supplier: "",
        batchNumber: "",
        manufacturer: "",
        description: "",
        costPrice: "",
        sellingPrice: "",
      });
      setShowAddProductForm(false);
    } else {
      alert("Please fill out the required fields.");
    }
  };

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
            <div
              className='add_customer_logo flex gap-2 cursor-pointer mt-2'
              onClick={() => setShowAddProductForm(true)}
            >
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
                {products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-100 text-center align-middle">
                    <td className="border border-gray-400 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.nos}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.quantity}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.costPrice}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.sellingPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Product Form */}
          {showAddProductForm && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-5 rounded w-[80%]">
                <h2 className="text-xl font-bold mb-4">Add Product</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name*"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Quantity*"
                    value={newProduct.quantity}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="taxRate"
                    placeholder="Tax Rate"
                    value={newProduct.taxRate}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="taxType"
                    placeholder="Tax Type"
                    value={newProduct.taxType}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier"
                    value={newProduct.supplier}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="batchNumber"
                    placeholder="Batch Number"
                    value={newProduct.batchNumber}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="manufacturer"
                    placeholder="Manufacturer"
                    value={newProduct.manufacturer}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="number"
                    name="costPrice"
                    placeholder="Cost Price*"
                    value={newProduct.costPrice}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="number"
                    name="sellingPrice"
                    placeholder="Selling Price*"
                    value={newProduct.sellingPrice}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => setShowAddProductForm(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addProduct}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
