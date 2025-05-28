import { Link } from "react-router-dom";


const Banner = () => {


    return (
        <section className="  addfoodbg ">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-20">
                {/* Left Section */}
                <div className="md:w-1/2 text-center md:text-left ">
                    <p className="text-sm text-green-600 font-semibold">Delicious & Fresh</p>
                    <h1 className="text-4xl md:text-7xl uppercase font-extrabold text-white mt-7 animate-bounce">
                    Savor <span className="text-yellow-300">the Best</span> Meals
                    </h1>
                    <p className="text-white mt-4 mb-16">
                    Experience a world of flavors with our freshly prepared meals. Enjoy
                    quality ingredients and mouthwatering recipes.
                    </p>
                    <Link to='/allFoods' className="mt-6 px-6 py-3  border-white border bg-green-600 text-white font-semibold rounded-lg hover:bg-[#fde047] hover:text-gray-600 transition">
                    View All Foods
                    </Link>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <img
                    src="https://foodking-react.vercel.app/assets/img/hero/chiken.png"
                    alt="Delicious Food"
                    className="rounded-lg animate-pulse transition-transform duration-700 ease-out hover:rotate-5 hover:scale-125 shadow-lg w-80 md:w-full max-w-sm md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
