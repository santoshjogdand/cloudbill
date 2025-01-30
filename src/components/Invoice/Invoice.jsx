import React from 'react'
import { useState } from "react";


const Invoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "cash", label: "CASH", icon: "M12 8c.884 0 1.68.195 2.343.513C13.418 7.805 11.973 7 10 7 6.13 7 4 9.134 4 12c0 1.882.773 3.418 1.905 4.457A7.49 7.49 0 0010 19c1.972 0 3.417-.805 4.343-1.513A5.493 5.493 0 0112 8z", amount: "4528.0" },
    { id: "card", label: "CARD", icon: "M3 10h18M3 6h18M3 14h18M3 18h18" },
    { id: "credit-note", label: "CREDIT NOTE", icon: "M8 16l4-4-4-4m4 4h8m-8 4v-8" },
    { id: "wallet", label: "WALLET", icon: "M3 10h18m-6 4H3" },
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className='main w-full h-full bg-blue-100 flex'>
      <div className='left w-[55vw] h-full'>
        <div className='customer_details mt-10 px-10'>
          <div className='title flex justify-between'>
            <div>CUSTOMER DETAILS</div>
            <div className="customer_number relative w-full max-w-xs">
              <img
                src="../src/assets/search.svg"
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="pl-10 p-2 border border-gray-300 rounded w-full outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
              />
            </div>

          </div>
          <div className='customer_info flex justify-between mt-10'>
            <div className='customer_info_left h-[20vh] w-[23vw] bg-white rounded-lg'>
              <div className='c_name_contact flex justify-between mt-2 text-sm px-4'>
                <div className='cname'>
                  <div>INVOICE NO</div>
                  <div>12356</div>
                </div>
                <div className='ccontact'>
                  <div>CONTACT NO</div>
                  <div>9172198021</div>
                </div>

              </div>
              <div className='separating_line border-t border-gray-300 my-2'></div>
              <div className='c_address pl-4  text-sm'>
                <div className='c_address_title'>
                  DATE
                </div>
                <div>
                  12/05/2025
                </div>
              </div>
            </div>
            <div className='customer_info_right h-[20vh] w-[23vw] bg-white rounded-lg'>
              <div className='c_name_contact flex justify-around mt-2 text-sm'>
                <div className='cname'>
                  <div>CUSTOMER NAME</div>
                  <div>Rohit Thorbole</div>
                </div>
                <div className='ccontact'>
                  <div>CONTACT NO</div>
                  <div>9172198021</div>
                </div>
                <div>
                  <div><img src="../src/assets/delete.svg" alt="" /></div>
                  <div><img src="../src/assets/edit.svg" alt="" /></div>
                </div>
              </div>
              <div className='separating_line border-t border-gray-300 my-2'></div>
              <div className='c_address pl-4  text-sm'>
                <div className='c_address_title'>
                  ADDRESS
                </div>
                <div>
                  Here Address comes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='separating_line border-t border-gray-400 my-3'></div>
        <div className='Product_details'>
          <div className='title flex justify-between px-10'>
            <div className='ptitle text-base'>PRODUCT CART</div>
            <div className="product_search relative w-full max-w-xs">
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
            <div>
              <button className='bg-blue-500 text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-blue-600 focus:outline-none'>
                Clear Cart
              </button>

            </div>
          </div>
          <div className='separating_line border-t border-gray-400 my-3'></div>
          <div className='product_list'>
            <div className="field_name flex justify-between px-10">
              <div>Sr No</div>
              <div>Product Name</div>
              <div>Rate</div>
              <div>Quantity</div>
              <div>Tax</div>
              <div>Total</div>
            </div>
          </div>
        </div>
      </div>
      <div className='right w-[31vw] h-full bg-gray-50'>
        <div className='amount mt-10 px-5'>
          <div className="title">Invoice</div>
          <div className='flex justify-between mt-5'>
            <div className="bg-blue-500 text-white text-center rounded-lg shadow-md p-2 w-[12vw]">
              <div className="text-sm">Collected Amount</div>
              <div className="text-sm font-bold mt-1">4528.00</div>
            </div>
            <div className="bg-blue-500 text-white text-center rounded-lg shadow-md p-2 w-[12vw]">
              <div className="text-sm">Due Amount</div>
              <div className="text-sm font-bold mt-1">00</div>
            </div>
          </div>
        </div>
        <div className='separating_line border-t border-gray-300 my-2'></div>
        <div className="accepting_payment">
          <div className="w-full bg-gray-100 rounded-lg shadow-md p-1 flex gap-2 justify-between">
            {options.map((option) => (
              <div
                key={option.id}
                className={`option ${selectedOption === option.id
                  ? "bg-blue-100"
                  : "bg-white hover:bg-gray-200"
                  } rounded-lg flex items-center p-2 cursor-pointer`}
                onClick={() => handleOptionClick(option.id)}
              >
                <div className="icon text-blue-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={option.icon}
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className={`text-sm ${selectedOption === option.id ? "text-blue-500" : "text-gray-800"
                      }`}
                  >
                    {option.label}
                  </div>
                  {option.amount && (
                    <div className="text-sm text-gray-500">
                      {option.amount}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="received-amount mt-4">
            <label
              htmlFor="receivedAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Received Amount
            </label>
            <input
              type="text"
              id="receivedAmount"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              readOnly
            />
          </div>
        </div>

        <div className='separating_line border-t border-gray-300 my-2'></div>
        <div className='detail_payment'>

        </div>
      </div>
    </div>
  )
}

export default Invoice
