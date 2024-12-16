import React from "react";

const Pagination = ({ currentPage, handlePageChange, totalPages }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border text-gray-700 
        ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:bg-gray-200"
        }`}>
        Previous
      </button>
      <div className="flex space-x-2">
        <div className="px-4 py-2 rounded-lg border bg-blue-500 text-white">
          Page {currentPage} of {totalPages}
        </div>
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border text-gray-700 
        ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:bg-gray-200"
        }`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
