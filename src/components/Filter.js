// components/FilterOptions.js
import React from 'react';

const Filter = ({ setCategory, setStartDate, setEndDate }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">
          Filter by Category:
        </label>
        <select
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 p-2"
        >
          <option value="">All</option>
          <option value="Fiction">Fiction</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="startDate" className="mr-2">
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-400 p-2"
        />
        <label htmlFor="endDate" className="ml-4 mr-2">
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-400 p-2"
        />
      </div>
    </div>
  );
};

export default Filter;
