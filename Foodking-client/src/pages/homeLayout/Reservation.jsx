import { IoCallSharp } from "react-icons/io5";


const Reservation = () => {
    return (
      <section className="registerbg text-white py-20 px-4 sm:px-8 font-Oswald">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Column */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-wider animate-pulse  text-red-500 mb-2">Crispy, every bite taste</p>
            <h2 className="text-6xl uppercase animate-bounce mt-5 mb-6 font-bold ">
              Need booking? <br /> Reserve your table?
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="bg-green-500 p-2 rounded-full">
              <IoCallSharp />
              </span>
              <span className="text-lg font-medium">+880 1822 1822 07</span>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="md:w-1/2 bg-green-500 p-6 rounded-lg shadow-lg dark:bg-gray-900">
            <form className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-1" htmlFor="people">
                  People
                </label>
                <select
                  id="people"
                  className="w-full bg-white dark:bg-gray-600 dark:text-white outline-none text-black rounded-md px-3 py-2 focus:ring focus:ring-green-300"
                >
                  <option value="1">Person 1</option>
                  <option value="2">People 2</option>
                  <option value="3">People 3</option>
                  <option value="4">People 4</option>
                </select>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full outline-none bg-white dark:bg-gray-600 text-black rounded-md px-3 py-2 focus:ring focus:ring-green-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full outline-none bg-white dark:bg-gray-600 dark:text-white text-black rounded-md px-3 py-2 focus:ring focus:ring-green-300"
                />
              </div>
              <button
                type="submit"
                className="w-full  bg-yellow-400 dark:text-gray-900 font-bold rounded-md py-2 hover:bg-gray-800 dark:hover:bg-white"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};
  
  export default Reservation;
  