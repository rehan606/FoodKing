import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Spinner */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid border-b-transparent"></div>
            {/* Loading Text */}
            <p className="mt-4 text-green-600 text-5xl font-bold">FOODKING</p>
        </div>
      ) : (
        <div className="text-green-500 text-2xl font-bold">
          Welcome to FoodKing!
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
