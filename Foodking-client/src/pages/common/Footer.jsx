import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-200 dark:bg-gray-900 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8  py-20">
          {/* Left Section */}
          <div className="">
            <h2 className="text-lg font-bold text-gray-800 flex items-center dark:text-white">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3089/3089716.png"
                alt="Logo"
                className="w-8 h-8 mr-2"
              />
              FOODKING
            </h2>
            <p className="mt-4 text-gray-600 dark:text-white">
              We believe it has the power to do amazing things.
            </p>
            <p className="mt-2 text-gray-600 ">Interested in working with us?</p>
            <a href="mailto:info@example.com" className="text-green-500 font-bold">
              info@example.com
            </a>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-vimeo"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-green-500 ">Services</a></li>
              <li><a href="#" className="hover:text-green-500 ">About Company</a></li>
              <li><a href="#" className="hover:text-green-500 ">Latest News</a></li>
              <li><a href="#" className="hover:text-green-500 ">Team Member</a></li>
              <li><a href="#" className="hover:text-green-500 ">Testimonials</a></li>
            </ul>
          </div>
  
          {/* My Account */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">My Account</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-green-500">My Profile</a></li>
              <li><a href="#" className="hover:text-green-500">My Order History</a></li>
              <li><a href="#" className="hover:text-green-500">My Wish List</a></li>
              <li><a href="#" className="hover:text-green-500">Order Tracking</a></li>
              <li><a href="#" className="hover:text-green-500">Shopping Cart</a></li>
            </ul>
          </div>

          {/* Address & Install App */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Address:</h3>
            <p className="mt-4 text-gray-600">
              570 8th Ave, New York, NY
              <br />
              <span className="text-red-500">10018 United States</span>
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Hours:</span>
              <br />
              9:30am - 6:30pm
              <br />
              Monday to Friday
            </p>
            
          </div>

          <div>
          <h3 className="text-lg font-bold text-gray-800 mt-6 dark:text-white">Install App</h3>
            <div className="flex mt-4 space-x-4">
              <img
                src="https://foodking-react.vercel.app/assets/img/app-store.png"
                alt="App Store"
                className="w-24"
              />
              <img
                src="https://foodking-react.vercel.app/assets/img/google-play.png"
                alt="Google Play"
                className="w-24"
              />
            </div>
            <p className="mt-4 text-gray-600 dark:text-white">
              24/7 Support Center:
              <br />
              <span className="text-green-500 font-bold">+880 1822 1822 07</span>
            </p>
          </div>
  
          
        </div>
        <div className='bg-green-600 mt-6 dark:bg-gray-800'>
            <div className="w-11/12 mx-auto text-center ">
                <p className='text-white py-6 text-md'>© Copyright <span className='text-yellow-500'>2024</span> Foodking . All Rights Reserved.</p>
            </div>
        </div>
      </footer>
      
    );
  };
  
  export default Footer;
  