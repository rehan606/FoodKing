import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { GiOpenedFoodCan } from "react-icons/gi";
import { SiCodefresh } from "react-icons/si";

const Services = () => {
    return (
      <section className="bg-[#F3F4F6] text-gray-300 py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
                <span className="text-gray-600 dark:text-white">Our </span>
                <span className="text-green-700">Services</span>
                </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  p-6 rounded-lg">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-left border border-gray-100 hover:shadow-xl hover:shadow-green-600">
              <div className="text-green-500 text-4xl mb-4">
              <GiOpenedFoodCan />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-white">Super quality food</h3>
              <p className="text-gray-400">
                Tailored solutions to meet your unique business needs with precision and excellence.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-left border border-gray-100 hover:shadow-xl hover:shadow-green-600">
              <div className="text-green-500 text-4xl mb-4">
              <GiForkKnifeSpoon />
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-white">Original recipes</h3>
              <p className="text-gray-400">
                Creative designs that captivate and elevate your brand identity effortlessly.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-left border border-gray-100 hover:shadow-xl hover:shadow-green-600">
              <div className="text-green-500 text-4xl mb-4">
                <MdDeliveryDining />
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-white">Quick fast delivery</h3>
              <p className="text-gray-400">
                Boost your online presence with advanced SEO strategies and tools.
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-left border border-gray-100 hover:shadow-xl hover:shadow-green-600 ">
              <div className="text-green-500 text-4xl mb-4 ">
              <SiCodefresh />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-white">100% fresh foods</h3>
              <p className="text-gray-400">
                Scalable and secure cloud services tailored to your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  