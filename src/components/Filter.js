// components/FilterOptions.js
import React from 'react';

const Filter = ({ setCategory, setStartDate, setEndDate }) => {
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="mb-8">
      <div className="mb-4 flex flex-col sm:flex-row">
        <label htmlFor="category" className="mr-2 mb-2 sm:mb-0">
          Filter by Category:
        </label>
        <select
          id="category"
          onChange={handleCategoryChange}
          className="border border-gray-400 p-2 bg-gray-200 cursor-pointer text-black"
        >
          <option value="">All</option>
          <option value="Fiction">Fiction</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row">
        <label htmlFor="startDate" className="mr-2 mb-2 sm:mb-0">
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          onChange={handleStartDateChange}
          className="border border-gray-400 p-2 cursor-pointer bg-gray-200 text-black"
        />
        <label htmlFor="endDate" className="ml-4 mr-2 mb-2 sm:mb-0">
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          onChange={handleEndDateChange}
          className="border border-gray-400 p-2 cursor-pointer text-black bg-gray-200"
        />
      </div>
    </div>
  );
};

export default Filter;
