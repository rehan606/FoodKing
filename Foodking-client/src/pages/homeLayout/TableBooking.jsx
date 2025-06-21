import React, { useState } from "react";

const TableBooking = () => {
    const [people, setPeople] = useState("4 people");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("07:00 pm");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking for ${people} on ${date} at ${time}`);
    };

    return (
        <section className="bg-[#F9FAFB]  dark:bg-[#1F2937]  py-20  px-6 md:px-10">
            <div className="max-w-6xl  mx-auto bg-white dark:bg-[#111827] shadow-md rounded-xl p-6 md:p-20 relative overflow-hidden ">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
                <span className="text-gray-600 dark:text-white">Table </span>
                <span className="text-green-700">Booking</span>
                </h2>

                <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center"
                >
                <select
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="outline-none border border-gray-300 rounded-md p-3 w-full md:w-48 bg-white  dark:bg-[#1F2937] text-gray-800 dark:text-white"
                >
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                    <option>6+ people</option>
                </select>

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="outline-none border border-gray-300 rounded-md p-3 w-full md:w-48 bg-white dark:bg-[#1F2937] text-gray-800 dark:text-white"
                />

                <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="outline-none border border-gray-300 rounded-md p-3 w-full md:w-48 bg-white dark:bg-[#1F2937] text-gray-800 dark:text-white"
                >
                    <option>06:00 pm</option>
                    <option>06:30 pm</option>
                    <option>07:00 pm</option>
                    <option>07:30 pm</option>
                    <option>08:00 pm</option>
                </select>

                <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white w-full md:w-48 px-20 lg:px-12 py-1 lg:py-3"
                >
                    Find Table
                </button>
                </form>
            </div>
        </section>
    );
};

export default TableBooking;
