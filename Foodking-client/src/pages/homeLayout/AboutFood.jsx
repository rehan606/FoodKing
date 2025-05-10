import React from "react";

const AboutFood = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50 p-6 md:p-12 dark:bg-gray-900">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="https://foodking-react.vercel.app/assets/img/about/burger.png"
            alt="Delicious Burger"
            className="rounded-lg shadow-lg w-80 md:w-full max-w-sm md:max-w-md"
          />
          <div className="absolute top-4 left-4 bg-yellow-400 text-white font-bold py-1 px-3 rounded">
            Since 1985
          </div>
          <p className="absolute bottom-4 left-4 text-3xl font-bold text-black bg-white/75 px-2 py-1 rounded">
            $4.99
          </p>
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <p className="text-sm text-red-500 font-bold uppercase">
            About Our Food
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2 dark:text-white">
            Where Quality Meets Excellent{" "}
            <span className="text-red-500">Service</span>.
          </h1>
          <p className="text-gray-600 mt-4 dark:text-white">
            It's the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients. Experience quick and efficient
            service that ensures your food is served fresh.
          </p>
          <div className="flex flex-col md:flex-row mt-6 gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white p-2 rounded-full">
                <i className="fas fa-utensils"></i>
              </span>
              <p className="text-gray-800 font-semibold dark:text-white">Super Quality Food</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white p-2 rounded-full">
                <i className="fas fa-star"></i>
              </span>
              <p className="text-gray-800 font-semibold dark:text-white">Well Reputation</p>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            More About Us
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Brendon Garrey: Customer's experience is our highest priority.
          </p>
        </div>
        
      </section>
    </div>
  );
};

export default AboutFood;
