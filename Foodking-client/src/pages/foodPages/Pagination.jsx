
import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className=" flex items-center justify-center space-x-2 pb-20">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Number buttons */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`w-10 h-10 flex items-center justify-center bg-gray-200 text-black rounded-md 
              ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
