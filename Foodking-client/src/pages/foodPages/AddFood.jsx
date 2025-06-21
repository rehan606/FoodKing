import { useContext } from "react";
import Navbar from "../common/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../common/Footer";


const AddFood = () => {
    const {user} = useContext(AuthContext)
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
            order: 0 ,
        }
        console.log(formData)

        // Make a post 
        try{
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-food`, formData)

            
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Food Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset()
            navigate('/myFoods')

        } catch(err){
            console.log(err)
            toast.error(err.message);
        }

        
    }


    return (
        <div>
            <section className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </section>

            <div className="bg-[#F3F4F6] dark:bg-[#1F2937] min-h-screen py-10 font-Roboto">
            <div className="max-w-2xl mx-auto bg-white/40 dark:bg-gray-900/80 shadow-lg rounded-lg p-8">
                <h2 className="text-4xl font-Oswald uppercase border-b pb-6 font-bold text-center text-green-600 mb-6 dark:text-white">Add New Food Item</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Food Name */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Food Name</label>
                    <input
                    type="text"
                    name='food_title'
                    placeholder="Enter food name"
                    className="w-full py-2 px-3 outline-none border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    />
                </div>
        
                {/* Food Image */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Food Image</label>
                    <input
                    type="url"
                    name="image"
                    className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    />
                </div>
        
                {/* Food Category */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Food Category</label>
                    <select name="category" className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white">
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
        
                {/* Quantity */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Quantity</label>
                    <input
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity"
                    className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    />
                </div>
        
                {/* Price */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Price</label>
                    <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    />
                </div>
        
                {/* Add By */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Add By</label>
                    <div className="flex space-x-4">
                    <input
                        type="text"
                        name='name'
                        defaultValue={user?.displayName}
                        disabled='true'
                        placeholder="Your name"
                        className="w-1/2 py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    />
                    <input
                        type="email"
                        name='email'
                        disabled='true'
                        defaultValue={user?.email}
                        placeholder="Your email"
                        className="w-1/2 py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    />
                    </div>
                </div>
        
                {/* Food Origin */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Food Origin</label>
                    <input
                    type="text"
                    name="origin"
                    placeholder="Enter country of origin"
                    className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    />
                </div>
        
                {/* Short Description */}
                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2 dark:text-white">Short Description</label>
                    <textarea
                    name="description"
                    placeholder="Write ingredients, making procedure, etc."
                    rows="4"
                    className="w-full py-2 px-3 outline-none border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white"
                    ></textarea>
                </div>
        
                {/* Add Item Button */}
                <div className="md:col-span-2 text-center">
                    <button
                    type="submit"
                    className="bg-green-600 w-full hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                    Add Item
                    </button>
                </div>
                </form>
            </div>
            </div>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};
  
export default AddFood;
  