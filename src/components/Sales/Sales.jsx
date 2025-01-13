import React from 'react'

const Sales = () => {
  return (
    <div className='main h-full m-0 p-0'>
      <div className='left h-full w-[50vw] bg-blue-200'>
        <div className='customer_details h-[25vh] w-full'>
          <div className="title">CUSTOMER DETAILS</div>
          <div className="customer_details_box"></div>
        </div>
        <div className='product_details'>
          <div className="title">PRODUCT DETAILS</div>
          <div className="product_details_box"></div>
        </div>
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Sales
