import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const TopFoodCard = ({food}) => {
    const {_id, title, image, price, order } = food;


    return (
        <div>
            <div className="bg-white dark:bg-gray-900 dark:border-gray-900 transition-transform duration-700 ease-out hover:scale-105  border rounded-lg shadow-md p-4 font-Oswald hover:bg-[#FFB936] dark:hover:bg-[#FFB936]  relative group flex flex-col items-center">
                {/* Heart Icon */}
                <div className="absolute top-4 left-4 bg-gray-100 rounded-full p-2 text-gray-400 hover:text-red-500 hover:bg-red-100 cursor-pointer transition duration-300">
                <FaHeart />
                </div>

                {/* Image */}
                <div className="w-60 h-60 rounded-full mb-10">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>

                {/* Content */}
                <div className="mt-4 text-center pb-10">
                {/* Add to Cart Button */}
                <Link to={`/foodDetail/${_id}`} className="bg-white border  border-gray-300 text-gray-800 px-10 py-1 rounded-full flex items-center gap-2 mx-auto hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white transition duration-300">
                    <TbListDetails />
                    View Details
                </Link>

                {/* Price */}
                <p className="mt-2 text-lg font-semibold text-red-700">$ {price}</p>

                {/* Title */}
                <h3 className="mt-1 text-md font-medium text-gray-800 dark:text-white">{title}</h3>

                {/* order Count  */}
                <p className="text-green-600 text-sm mt-2">Total Order: {order}</p>
                </div>
            </div>
        </div>
    );
};

export default TopFoodCard;