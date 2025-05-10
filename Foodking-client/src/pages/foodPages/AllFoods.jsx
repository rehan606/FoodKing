import React, { useContext, useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import FoodCard from "./FoodCard";
import axios from "axios";
import Footer from "../common/Footer";
import { useQuery } from "@tanstack/react-query";
import DataLoader from "../common/DataLoader";
import Pagination from "./Pagination";




const AllFoods = () => {


  const [foods, setFoods] = useState([]);
  // Filtering 
  const [filter, setFilter] = useState('')  
   // Search  
  const [search, setSearch] = useState('') 
   // Sort  
  const [sort, setSort] = useState('') 
 

  // Pagination States
 

  // Fetch All Foods with Pagination, Filter, Search, and Sort
  useEffect(() => {
    const fetchAllFoods = async () => {
      
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-foods?filter=${filter}&search=${search}&sort=${sort}`);
      setFoods(data);

    };
    fetchAllFoods();
  }, [filter, search, sort]);


  

  
  // TanStack query 
  // const { data: foods , isLoading} = useQuery({ 
  //   queryKey: ['all-foods'], 
  //   queryFn: async()=> {
  //     const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-foods?filter=${filter}&search=${search}&sort=${sort}`);
  //       return data
  //   } 
  // })

  // if(isLoading){
  //    return <DataLoader/>
     
  // }


 
  // Reset all filter, search, sort 
  const handleReset = () => {
    setSearch('')
    setFilter('')
    setSort('')
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
            All Foods
          </h2>
        </div>
      </div>

      {/* Search and Filter  */}
      <div className="py-10 bg-white dark:bg-gray-800">
        <div className="w-11/12 mx-auto shadow-md p-4 border dark:border-gray-900 dark:bg-gray-900 rounded-lg flex flex-wrap items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={search}
              placeholder="Search..."
              onChange={(e)=> setSearch(e.target.value)}
              className="w-full border bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:border-gray-800 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="px-4 py-2 text-white dark:border-gray-800 border rounded-tr-md rounded-br-btn bg-gray-700 absolute top-0 right-0">Search</button>
           
          </div>

          {/* Filter Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="filter" className="text-gray-600 font-medium dark:text-white">
              Filter By:
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e)=> setFilter(e.target.value)}
              className="border bg-white text-gray-900 dark:text-white dark:bg-gray-800  dark:border-gray-800 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <option value="">All</option>
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

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-gray-600 font-medium dark:text-white">
              Sort By:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e)=> setSort(e.target.value)}
              className="border dark:bg-gray-800 dark:border-gray-800 bg-white text-gray-900 dark:text-white border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Sort</option>
              <option value="asc">Ascending Order</option>
              <option value="dsc">Descending Order</option>
            </select>
          </div>

          {/* View Toggle Buttons */}
          <div className="flex items-center gap-2">
            
            <button className="border p-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
            </button>
            <button onClick={handleReset} className="border p-2 rounded-lg text-white  bg-red-600  hover:bg-gray-900 focus:ring-2 focus:ring-blue-500">
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Cards  */}

      <div className="bg-white dark:bg-gray-800">
        <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-20 ">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>


        {/* pagination  */}
        <section className="">
          <Pagination></Pagination>
        </section>
        
      </div>

      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default AllFoods;
