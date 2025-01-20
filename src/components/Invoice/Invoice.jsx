import React from 'react'

const Invoice = () => {
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
      <div className='right w-[31vw] h-full bg-gray-50'></div>
    </div>
  ) 
}

export default Invoice
