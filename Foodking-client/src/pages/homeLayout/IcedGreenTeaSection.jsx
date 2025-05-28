import React from 'react';
import greenTeaBottle from '../../assets/green-tea-bottle.png'; // Replace with your actual image path

const IcedGreenTeaSection = () => {
  return (
    <section className="bg-white px-4 pt-28 pb-20 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-800 leading-tight">
            Brand Iced Green Tea Lemon <span className="text-green-600">Juice</span><br />
            <span className="text-green-600">Food Included</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some festive beers for yourself!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 text-center">
            <div className="border-l-4 pl-4">
              <p className="text-sm text-gray-500">Extact Juice</p>
              <p className="text-xl font-bold text-green-600">15%</p>
            </div>
            <div className="border-l-4 pl-4">
              <p className="text-sm text-gray-500">Alcohol</p>
              <p className="text-xl font-bold text-green-600">0%</p>
            </div>
            <div className="border-l-4 pl-4">
              <p className="text-sm text-gray-500">Vitamin A–Z</p>
              <p className="text-xl font-bold text-green-600">90%</p>
            </div>
          </div>

          <button className="w-full md:w-40 mt-6 bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            
            <div className="absolute left-2 top-0 bg-red-600 text-white px-2 py-1 rounded rotate-[-20deg] text-sm font-bold z-20">
              SALE <br /> <span className="text-yellow-300">50% OFF</span>
            </div>
            <img src={greenTeaBottle} alt="Green Tea Bottle" className="w-52 md:w-96 relative z-0 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IcedGreenTeaSection;
