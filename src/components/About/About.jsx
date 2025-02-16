import React from 'react';

const About = () => {
  return (
    <div className='main bg-blue-100 w-full h-full pl-[30vh] flex justify-center items-center'>
      <div className="main_box w-[30vw] h-[75vh] bg-gray-50 rounded-lg shadow-lg flex flex-col items-center p-6">


        <div className="w-24 h-24 rounded-full flex justify-center items-center mb-4">
          <img src="../src/assets/1.png" alt="logo" className='w-[7vw]' />
        </div>

        <h1 className="text-[2vw] font-semibold text-gray-700 mb-2">CloudBill Manager</h1>

        <div className="text-gray-600 my-[1vw] text-[1.5vw]">
          <p className="mb-1 my-2">Contact: +91 98765 43210</p>
          <p className="mb-1 my-2">Email: support@cloudbill.com</p>
          <p className="mb-1 my-2">Address: 123, Business Park, Pune, Maharashtra</p>
          <p className="mb-1 my-2">Category: Software Solutions</p>
          <p className="mb-1 my-2">GSTIN: 27ABCDE1234F1Z5</p>
        </div>

      </div>
    </div>
  );
}

export default About;
