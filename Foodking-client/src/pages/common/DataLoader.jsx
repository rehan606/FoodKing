import React from 'react';

const DataLoader = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                {/* Spinner */}
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid border-b-transparent"></div>
                {/* Loading Text */}
                <p className="mt-4 text-green-600 font-semibold">Loading...</p>
            </div>
        </div>
    );
};

export default DataLoader;