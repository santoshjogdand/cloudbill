import React from 'react'

const Sales = () => {
  return (
    <div className='main h-full m-0 p-0'>
      <div className='left h-full w-full bg-blue-200 pt-3 pl-3'>
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
              <label htmlFor="cname" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="cname"
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="cphone" className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                id="cphone"
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="caddress" className="text-sm font-medium">Address</label>
              <input
                type="text"
                id="caddress"
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="cemail" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="cemail"
                className="p-1 border border-gray-300 rounded w-[80%]"
              />
            </div>
          </div>
        </div>
        <div className='product_details p-2'>
          <div className="title text-lg">PRODUCT DETAILS</div>
          <div className="product_details_box"></div>
        </div>
      </div>



    </div>
  )
}

export default Sales
