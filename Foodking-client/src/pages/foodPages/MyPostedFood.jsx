import Navbar from "../common/Navbar";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";

const MyPostedFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  console.log(foods);

  useEffect(() => {
    fetchAllFoods();
  }, [user]);

  const fetchAllFoods = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/foods/${user?.email}`
    );
    setFoods(data);
  };

  

  // const { title, image, description, price } = foods

  return (
    <div className="font-Oswald">
      <section className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </section>
      {/* Section Header */}
      <div className="headerbg ">
        <div className="w-11/12 mx-auto py-20">
          <h2 className="font-Oswald uppercase font-bold text-3xl md:text-5xl text-white text-center">
            My Foods
          </h2>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="w-full lg:w-6/12 mx-auto mb-4 ">
          <h2 className="text-2xl font-bold ml-7 text-red-500">
            My Foods: ({foods.length}){" "}
          </h2>
        </div>
        <div className="w-11/12 mx-auto flex flex-col gap-4">
          {
            foods.map((food) => (
                <div key={food._id} className="w-full lg:w-6/12  mx-auto transition-transform duration-700 ease-out hover:scale-105">
                    <div className="bg-white group hover:bg-[#FFB936] border hover:border-green-500 transition duration-300 rounded-md shadow-lg grid grid-rows-1 md:grid-cols-6 gap-4">
                        {/* Left Column: Food Image */}
                        <div className="col-span-6 md:col-span-2 p-3 flex items-center justify-center ">
                            <img
                                src={food.image}
                                alt="Food"
                                className="rounded-md object-cover"
                            />
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-span-6 md:col-span-4 p-4 flex flex-col justify-between">
                            <div>
                                {/* Rating */}
                                <div className="flex space-x-1 mb-2">
                                <span className="text-red-500">★</span>
                                <span className="text-red-500">★</span>
                                <span className="text-red-500">★</span>
                                <span className="text-gray-900">★</span>
                                <span className="text-gray-900">★</span>
                                </div>
                                {/* Title */}
                                <h2 className="text-lg font-bold text-gray-800 mb-1 ">
                                {food.title}
                                </h2>
                                {/* Short Description */}
                                <p className="text-gray-600 text-sm">{ food.description.slice(0,100)} ... </p>
                            </div>
                            {/* Price and Update Button */}
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-lg font-semibold text-red-500">
                                $ {food.price}
                                </p>
                                <Link to={`/update/${food._id}`} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-red-500 hover:scale-105 transition duration-300">
                                Update
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
          ))}
        </div>
      </div>
          <hr />
      <section >
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MyPostedFood;
