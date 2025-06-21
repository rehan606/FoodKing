import React, { useState } from 'react';
import { FaChartPie, FaUtensils, FaUsers, FaStar, FaPlusCircle, FaShoppingCart, FaTimes, FaBars } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-gray-100 text-gray-800 font-sans relative">

        {/* Overlay */}
        {sidebarOpen && (
            <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            ></div>
        )}

        {/* Sidebar */}
        {/* <div className="w-64 bg-white shadow-md hidden lg:flex flex-col p-5 space-y-6"></div> */}

        <aside  className={`fixed top-0 left-0 z-40 h-100vh w-64 bg-white shadow-md p-5 space-y-6 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static `}>
            <div className="flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-green-600 cursor-pointer border-b-2 pb-6">🍔 FoodKing</Link>

                <button className="text-xl lg:hidden"
                    onClick={() => setSidebarOpen(false)}>
                    <FaTimes />
                </button>
            </div>

            <nav className="space-y-3">
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
                <FaChartPie className="text-green-500" /> Dashboard
            </a>
            <Link to="/dashboard/addFood"  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
                <FaPlusCircle className="text-green-500" /> Add Foods
            </Link>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
                <FaUtensils className="text-green-500" /> Menu Items
            </a>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
                <FaUsers className="text-green-500" /> Customers
            </a>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
                <FaShoppingCart className="text-green-500" /> Orders
            </a>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
                <FaStar className="text-green-500" /> Reviews
            </a>
            </nav>
            <button className="mt-auto flex items-center gap-2 text-red-600 hover:text-red-800">
            <MdLogout /> Logout
            </button>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-5">

            <div className="flex items-center gap-4">
                {/* Hamburger */}
                <button className="text-2xl lg:hidden" 
                    onClick={() => setSidebarOpen(true)}>
                    <FaBars />
                </button>
            </div>
            <Outlet></Outlet>
        </div>


        </div>
    );
};

export default Dashboard;




