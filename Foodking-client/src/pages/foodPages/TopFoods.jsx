import axios from "axios";
import React, { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { FaTruckFast } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DataLoader from "../common/DataLoader";

const TopFoods = () => {

    // const [topFoods, setTopFoods] = useState([]);

    
    // useEffect(() => {
    //     const fetchAllFoods = async () => {
    //     const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/top-foods`);
    //     setTopFoods(data);
    //     };
    //     fetchAllFoods();
    // }, []);


    // TanStack query 
    const { data: foods , isLoading} = useQuery({ 
        queryKey: ['foods'], 
        queryFn: async()=> {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/top-foods`);
            return data
        } 
    })

    if(isLoading){
       return <DataLoader/>
    }
    




    return (
        <div className="bg-gray-100 ">
        {/* Cards  */}

            <div className="py-20  ">
                <div className="w-11/12 mx-auto mb-10 ">
                    <span className="text-sm md:text-md uppercase text-red-500 font-bold ">crispy, every bite taste</span>
                    <h2 className="text-3xl md:text-5xl  text-gray-950 uppercase font-bold mt-2 md:mt-4">Popular Food Items </h2>

                </div>
                <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-20">

                    {foods.slice(0, 8).map((food) => (
                        <TopFoodCard key={food._id} food={food}></TopFoodCard>
                    ))}
                </div>

                <div className="flex justify-center">
                
                    <Link to='/allFoods' className="bg-green-600 animate-bounce py-4 px-7 flex items-center gap-3 uppercase text-white font-semibold rounded-md hover:bg-red-600"> <FaTruckFast /> View More</Link>
                </div>
            </div>
        </div>
    );
};

export default TopFoods;
