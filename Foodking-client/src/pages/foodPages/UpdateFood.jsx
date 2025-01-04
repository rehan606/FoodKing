import React, { useContext, useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";


const UpdateFood = () => {
    const {id} = useParams()
    const {user} = useContext(AuthContext)
    const [food, setFood] = useState({})

    useEffect(() => {
        fetchFoodData()
    }, [id])

    const fetchFoodData = async() => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`)
        setFood(data)
    }
    

    // Update Handler 
    const navigate = useNavigate()
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        const form = e.target
        const title = form.food_title.value
        const image = form.image.value
        const email = form.email.value
        const name = form.name.value
        const category = form.category.value
        const quantity = form.quantity.value
        const price = form.price.value
        const origin = form.origin.value
        const description = form.description.value

        const formData = { 
            title, 
            image, 
            buyer:{
                email,
                name: user?.displayName,
            },
            category, 
            quantity, 
            price, 
            origin, 
            description,
            order: food.order ,
        }
        console.log(formData)

        // Make a post 
        try{
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/update-food/${id}`, formData)
            form.reset()
            
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Update has been Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/myFoods')

        } catch(err){
            console.log(err)
            toast.error(err.message);
        }

        
    }
    

    return (
        <div>
            <div>
                <section>
                <Navbar></Navbar>
                </section>

                <div className="bg-green-600 min-h-screen py-10 font-Roboto">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-4xl font-Oswald uppercase border-b pb-6 font-bold text-center text-green-600 mb-6">
                    Update Food
                    </h2>
                    <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                    {/* Food Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                        Food Name
                        </label>
                        <input
                        type="text"
                        name="food_title"
                        defaultValue={food.title}
                        placeholder="Enter food name"
                        className="w-full py-2 px-3 outline-none border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Food Image */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                        Food Image
                        </label>
                        <input
                        type="url"
                        name="image"
                        defaultValue={food.image}
                        className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Food Category */}
                    {food.category && (
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                            Food Category
                            </label>
                            <select
                            name="category"
                            defaultValue={food.category}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                            >
                            <option value="">Select category</option>
                            <option value="burger">Burger</option>
                            <option value="fried-chiken">Fried Chiken</option>
                            <option value="french-fries">French Fries</option>
                            <option value="hot-pizzas">Hot Pizzas</option>
                            <option value="sandwich">Sandwich</option>
                            <option value="fried-rice">fried rice</option>
                            <option value="bread">Bread</option>
                            <option value="hot-dog">hot dog</option>
                            </select>
                        </div>
                    )}

                    {/* Quantity */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                        Quantity
                        </label>
                        <input
                        type="number"
                        name="quantity"
                        defaultValue={food.quantity}
                        placeholder="Enter quantity"
                        className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                        Price
                        </label>
                        <input
                        type="number"
                        name="price"
                        defaultValue={food.price}
                        placeholder="Enter price"
                        className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Add By */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                        Add By
                        </label>
                        <div className="flex space-x-4">
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            disabled="true"
                            placeholder="Your name"
                            className="w-1/2 py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                        <input
                            type="email"
                            name="email"
                            disabled="true"
                            defaultValue={user?.email}
                            placeholder="Your email"
                            className="w-1/2 py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                        </div>
                    </div>

                    {/* Food Origin */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                        Food Origin
                        </label>
                        <input
                        type="text"
                        name="origin"
                        defaultValue={food.origin}
                        placeholder="Enter country of origin"
                        className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-semibold mb-2">
                        Short Description
                        </label>
                        <textarea
                        name="description"
                        defaultValue={food.description}
                        placeholder="Write ingredients, making procedure, etc."
                        rows="4"
                        className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        ></textarea>
                    </div>

                    {/* Add Item Button */}
                    <div className="md:col-span-2 text-center">
                        <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                        Update
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;
