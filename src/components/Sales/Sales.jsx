import React from 'react'

const Sales = () => {
  return (
    <div className='main h-full m-0 p-0'>
      <div className='left h-full w-full bg-blue-200'>
        <div className='customer_details p-2 h-[25vh] w-full'>
          <div className="title ">CUSTOMER DETAILS</div>
          <div className="customer_details_box">
            <label htmlFor="">Name</label>
            <input type="text" id="cname" />
            <label htmlFor="">Phone</label>
            <input type="text" id="cphone" />
            <label htmlFor="">Address</label>
            <input type="text" id="caddress"/>
            <label htmlFor="">Email</label>
            <input type="text" id="cemail"/>
          </div>
        </div>
        <div className='product_details p-2'>
          <div className="title">PRODUCT DETAILS</div>
          <div className="product_details_box"></div>
        </div>
      </div>
    </div>
  )
}

export default Sales
