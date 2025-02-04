import React, {useState} from "react";

const Inventory = () => {
  const [filters, setFilters] = useState({
      amount: '',
      date: '',
      fromDate: '',
      toDate: '',
    });
  
    const handleFilterChange = (key, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    };
  
    return (
      <div className='main bg-blue-100 w-full h-full'>
         {/* Title */}
         <div className='title text-xl flex justify-center py-5'>Inventory</div>
  
        {/* Display Payments */}
        <div className='payments-list mt-5'>
          <p className='text-center text-gray-500'>No Products to display</p>
        </div>
      </div>
    );
};

export default Inventory;
