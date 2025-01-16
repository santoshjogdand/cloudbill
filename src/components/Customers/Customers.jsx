import React from 'react'

const Customers = () => {
  return (
    <div className='Main bg-blue-100 w-full h-full'>
      <div className='customer_page p-2'>
        <div className="title text-lg flex gap-[58vw]">
          <div>CUSTOMER DETAILS</div>
          <div className='flex gap-2'>
            <img src="../src/assets/plus.png" className="h-5" alt="plus" />
            <p className='text-sm'>Add Customer</p>
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
  )
}

export default Customers
