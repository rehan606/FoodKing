import Navbar from "../common/Navbar";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from 'react-hot-toast'
import Swal from "sweetalert2";
import Footer from "../common/Footer";
import moment from 'moment';

const Cart = () => {

    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const [total, setTotal] = useState(0);

    
    useEffect(() => {
        fetchAllFoods();
    }, [user]);

    const fetchAllFoods = async () => {
        const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/my-order/${user?.email}`
        );
        setOrders(data);

        // subtotal 
        const calculatedTotal = data.reduce(
            (acc, order) => acc + order.price * order.quantity,
            0
        );
        setTotal(calculatedTotal); 
    };


    // Delete order 
    const handleDelete = async id => {
        try {
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/my-order/${id}`)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Order Delete Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            fetchAllFoods()

        } catch (err) {
            console.log(err)
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Something Went Wrong",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    


    return (
        <div>
            <section className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </section>
            {/* Section Header */}
            <div className="headerbg ">
                <div className="w-11/12 mx-auto py-20">
                    <h2 className="font-Oswald uppercase font-bold text-3xl md:text-5xl text-white text-center">
                        My Orders
                    </h2>
                </div>
            </div>


            {/* Order Page  */}
            <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col items-center p-4 pt-20">
                <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                    {/* Cart Table */}
                    <table className="w-full text-left border-collapse">
                        <thead>
                        <tr className="bg-gray-900 text-green-600">
                            <th className="p-4">Product</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Quantity</th>
                            <th className="p-4">Subtotal</th>
                            <th className="p-4">Owner</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Remove</th>
                        </tr>
                        </thead>
                        <tbody className="dark:bg-white/10 dark:border  ">
                            {/* Cart Item 1 */}


                            {
                                orders.map(order => (
                                    <tr key={order._id} className="border-t hover:bg-green-200 dark:hover:bg-gray-800 ">
                                        <td className="p-4 flex items-center">
                                        <img
                                            src={order.image}
                                            alt="Deluxe Burger"
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <span className="text-black dark:text-white">{order.title}</span>
                                        </td>
                                        <td className="p-4 text-black dark:text-white">${order.price}</td>
                                        <td className="p-4">
                                        <input
                                            type="number"
                                            min="1"
                                            defaultValue={order.quantity}
                                            disabled={true}
                                            className="w-16 p-2 border text-black dark:text-white border-gray-300 rounded text-center"
                                        />
                                        </td>
                                        <td className="p-4 text-black dark:text-white"> $ {order.price * order.quantity}</td>
                                        <td className="p-4 text-black dark:text-white"> {user.displayName}</td>
                                        <td className="p-4 text-black dark:text-white">   {moment(order.createdAt).format('lll')}</td>
                                        <td className="p-4 text-red-500 cursor-pointer">
                                        
                                            <button className="btn bg-red-500 text-white hover:bg-black" onClick={() => handleDelete(order._id)} >X</button>
                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>
                    </table>

                {/* Promo Code and Actions */}
                    <div className="p-4 border-t flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 sm:mb-0">
                        <input
                            type="text"
                            placeholder="Promo Code"
                            className="w-full sm:w-64 p-2 border border-gray-300 rounded mr-2 bg-gray-100 dark:bg-gray-800  text-black dark:text-white"
                        />
                        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-red-600">
                            Apply Code
                        </button>
                        </div>
                        <div className="text-lg font-bold">
                            Total: ${total.toFixed(2)}
                        </div>
                        <button className="px-10  py-2 bg-green-500 text-white font-semibold rounded hover:bg-red-600">
                            Purchese
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Cart;
