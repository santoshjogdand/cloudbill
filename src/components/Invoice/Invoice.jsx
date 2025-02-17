import React, { useRef, useState } from 'react';

const Invoice = () => {

  const mobileNumberRef = useRef(null);
  const customerNameRef = useRef(null);
  const dateRef = useRef(null);
  const addressRef = useRef(null);

  const clearInputs = () => {
    if (mobileNumberRef.current) mobileNumberRef.current.value = '';
    if (customerNameRef.current) customerNameRef.current.value = '';
    if (dateRef.current) dateRef.current.value = '';
    if (addressRef.current) addressRef.current.value = '';
  };

  const [plates, setPlates] = useState([]); // State to store the list of plates

  // Function to add a new plate
  const handleAddPlate = () => {
    setPlates([...plates, {}]); // Add a new empty object to the array
  };

  const handleRemovePlate = (index) => {
    setPlates(plates.filter((_, i) => i !== index)); // Remove the plate at the clicked index
  };

  return (
    <div className='main w-full h-fit pb-[50vh] bg-blue-100 flex pl-[30vh]'>
      <div className='left w-[55vw] h-full'>
        <div className='customer'>
          <div className='title flex justify-between mt-5 px-10'>
            <div>CUSTOMER DETAILS</div>
            <div className="customer_number relative w-full max-w-xs">
              <img
                src="../src/assets/search.svg"
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              />
              <input
                type="text"
                placeholder="Customer Name"
                className="pl-10 p-2 border border-gray-300 w-full outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className='customer_info flex justify-between mt-10 px-10'>
            <div className='customer_info_left h-fit pb-2 w-[23vw] bg-white'>
              <div className='c_name_contact flex justify-between mt-2 text-sm px-4'>
                <div className='cname'>
                  <div>INVOICE NO</div>
                  <div>12356</div>
                </div>
                <div className='ccontact'>
                  <div>CONTACT NO</div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      ref={mobileNumberRef}
                      className="border-none outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className='separating_line border-t border-gray-300 my-2'></div>
              <div className='c_address px-4 text-sm'>
                <div className='c_address_title'>DATE</div>
                <div>
                  <input type="date" ref={dateRef} className="border-none outline-none bg-transparent" />
                </div>
              </div>
            </div>

            <div className='customer_info_right h-fit pb-2 w-[23vw] bg-white'>
              <div className='c_name_contact flex justify-between mt-2 text-sm mx-4'>
                <div className='cname'>
                  <div>CUSTOMER NAME</div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter customer name"
                      maxLength="50"
                      ref={customerNameRef}
                      className="border-none outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div>
                  <img
                    src='../src/assets/delete.svg'
                    alt="Delete"
                    onClick={clearInputs}
                    className="cursor-pointer w-5 h-5"
                  />
                </div>
              </div>
              <div className='separating_line border-t border-gray-300 my-2'></div>
              <div className='c_address px-4 text-sm'>
                <div className='c_address_title'>ADDRESS</div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter address"
                    maxLength="50"
                    ref={addressRef}
                    className="border-none outline-none bg-transparent"
                  />
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
                className="pl-10 p-2 border border-gray-300 w-full outline-none text-sm text-gray-700 focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div>
              <button
                onClick={handleAddPlate} // Call the function on button click
                className='bg-blue-500 text-white font-medium py-2 px-6 text-sm hover:bg-blue-600 focus:outline-none'
              >
                Add
              </button>
            </div>
          </div>
          <div className='separating_line border-t border-gray-400 my-3'></div>
          <div className='product_list'>
            <div className="field_name flex justify-between px-10">
              <div>Product Name</div>
              <div>Rate</div>
              <div>Quantity</div>
              <div>NOS</div>
              <div>Tax</div>
              <div>Total</div>
            </div>
          </div>
          {plates.map((plate, index) => (
            <div key={index} className="white_plate flex justify-center mt-2">
              <div className="w-[52vw] h-[8vh] bg-white flex items-center gap-3 px-4 relative shadow-md">
                <div className="flex gap-3 flex-grow">
                  <input type="text" className="w-[12vw] h-7 pl-2 border-none outline-none bg-transparent" />
                  <input type="text" className="w-[7vw] h-7 pl-5 border-none outline-none bg-transparent" />
                  <input type="text" className="w-[8vw] h-7 pl-5 border-none outline-none bg-transparent" />
                  <input type="text" className="w-[7vw] h-7 pl-10 border-none outline-none bg-transparent" />
                  <input type="text" className="w-[7vw] h-7 pl-10 border-none outline-none bg-transparent" />
                  <input type="text" className="w-[5vw] h-7 pl-5 border-none outline-none bg-transparent" />
                </div>
                {/* Cross Button to Remove Plate */}
                <div
                  className="cross absolute right-1 top-1 cursor-pointer"
                  onClick={() => handleRemovePlate(index)}
                >
                  <img src="../src/assets/cross.png" alt="Close" className="h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='right w-[31vw] h-full bg-gray-50 fixed ml-[55vw]'>
        <div className='detail_payment mt-5 px-5'>
          <div className="title text-xl my-3">Invoice</div>
          <div className='calculations'>
            <div className='sub_total flex justify-between text-sm'>
              <div>Sub Total</div>
              <div></div>
            </div>
            <div className='Taxes flex justify-between text-sm'>
              <div>Taxes</div>
              <div></div>
            </div>
            <div className='Discounts flex justify-between text-sm'>
              <div>Discount</div>
              <div></div>
            </div>
            <div className='Total flex justify-between text-sm font-bold'>
              <div>Total</div>
              <div></div>
            </div>
          </div>
        </div>

        <div className='separating_line border-t border-gray-300 my-5'></div>

        <div className='accepting_payments mt-5'>
          <div className="payment_mode flex justify-around">
            <div className='h-10 bg-gray-200 w-auto p-2 px-6'>CASH</div>
            <div className='h-10 bg-gray-200 w-auto p-2 px-6'>CARD</div>
            <div className='h-10 bg-gray-200 w-auto p-2 px-6'>UPI</div>
            <div className='h-10 bg-gray-200 w-auto p-2 px-6'>WALLET</div>
          </div>
          <div className='recived_payment flex justify-center mt-5'>
            <input
              type="text"
              placeholder="Received Amount"
              className="pl-10 p-2 border border-gray-300 outline-none text-sm text-gray-700 focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* <div className='buttons flex justify-around mt-10'>
            <button className='bg-blue-500 text-white font-medium w-[8vw] py-2 px-4 text-sm hover:bg-blue-600 focus:outline-none'>
              Save
            </button>
            <button className='bg-blue-500 text-white font-medium py-2 w-[10vw] px-4 text-sm hover:bg-blue-600 focus:outline-none'>
              Gate Payment
            </button>
          </div> */}
        </div>

        <div className='separating_line border-t border-gray-300 my-5'></div>

        <div className='amount mt-10 px-5'>
          <div className='flex justify-between mt-5'>
            <div className="bg-blue-500 text-white text-center shadow-md p-2 w-[12vw]">
              <div className="text-sm">Collected Amount</div>
              <div className="text-sm font-bold mt-1"></div>
            </div>
            <div className="bg-blue-500 text-white text-center shadow-md p-2 w-[12vw]">
              <div className="text-sm">Due Amount</div>
              <div className="text-sm font-bold mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
