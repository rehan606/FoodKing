import React, { useContext, useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Footer from "../common/Footer";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetchDetailsData();
  }, []);

  const fetchDetailsData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/details/${id}`
    );
    setFood(data);
  };


  //   Update quantity 
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10); 
    if (value >= 1) {
      setQuantity(value); 
    }
  };

  
  //   Order 
  const handleOrder = async () => {

    if (quantity > 10) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You cannot purchase more than 10 items at a time.",
        });
        return; 
      }

    const orderData = { 
        foodId: food._id,
        title: food.title,
        image: food.image,
        category: food.category,
        description: food.description,
        email: user?.email,
        name: user?.displayName,
        origin: food.origin,
        
        category: food.category,
        price: food.price,
        order: food.order ,
        quantity: quantity,
        createdAt: new Date(),
    }

    // Make a post 
    try{
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, orderData)
        console.log(data);
        

        
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Food Added Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        
        navigate('/my-order')

    } catch(err){
        console.log(err)
        
        
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500
        });
    }

  }

  return (
    <div className="font-Oswald">

      <section>
        <Navbar></Navbar>
      </section>
      {/* Section Header */}
      <div className="headerbg ">
        <div className="w-11/12 mx-auto py-20">
          <h2 className="font-Oswald uppercase font-bold text-3xl md:text-5xl text-white text-center">
            Single Food
          </h2>
        </div>
      </div>

      {/* Food Details Card  */}

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 dark:bg-gray-800">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Food Image Column */}
                    <div className="p-4 flex justify-center">
                    <img
                        src={food.image}
                        alt="Food"
                        className="w-70   md:w-full md:h-auto object-cover rounded-lg"
                    />
                    </div>

                    {/* Food Details Column */}
                    <div className="p-6 flex flex-col justify-between">
                    {/* Rating and Title */}
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                        <span className="text-yellow-400 text-lg">★★★★★</span>
                        <span className="ml-2 text-gray-600 dark:text-white">4.8 (250 reviews)</span>
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        {food.title}
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 dark:text-white">
                        {food.description}
                    </p>

                    {/* Price and Quantity */}
                    <div className="mb-4">
                        <p className="text-xl font-semibold text-red-500">
                        Price: $ {food.price}
                        </p>

                        <div className="flex items-center mt-2">
                          <label htmlFor="quantity" className="mr-2 text-gray-600 dark:text-white">
                              Quantity:
                          </label>
                          <input
                              id="quantity"
                              type="number"
                              min="1"
                              name="quantity"
                              defaultValue="1"
                              onChange={handleQuantityChange}
                              className="w-16 p-2 border border-gray-300 rounded "
                          />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mb-4">
                        <button onClick={handleOrder}  className="px-32 py-2 bg-green-500 text-white font-semibold rounded hover:bg-red-500 transition">
                          Purchase
                       </button>
                        <button className="p-2 bg-gray-100 text-gray-600 hover:text-white rounded-full hover:bg-green-600">
                            <FaHeart />
                        </button>
                    </div>

                    {/* Availability and Metadata */}
                    <div className="text-sm text-gray-600 space-y-2">
                        <p className="dark:text-white">
                        Available in Store:{" "}
                        <span className="text-green-600 ">{food.quantity}</span>
                        </p>
                        <p className="dark:text-white">
                        Category: <span className="font-medium text-green-600">{ food.category }</span>
                        </p>
                        <p className="dark:text-white">
                        Total Purchase Count:{" "}
                        <span className="font-medium text-green-600">{food.order}</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="">
            <Footer></Footer>
        </div>
    </div>
  );
};

export default FoodDetails;
