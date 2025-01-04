import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { GiOpenedFoodCan } from "react-icons/gi";
import { SiCodefresh } from "react-icons/si";

const Services = () => {
    return (
      <section className="bg-gray-100 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  bg-gray-900 p-6 rounded-lg">
            {/* Service 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <div className="text-green-500 text-4xl mb-4">
              <GiOpenedFoodCan />
              </div>
              <h3 className="text-xl font-semibold mb-2">super quality food</h3>
              <p className="text-gray-400">
                Tailored solutions to meet your unique business needs with precision and excellence.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <div className="text-green-500 text-4xl mb-4">
              <GiForkKnifeSpoon />
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">original recipes</h3>
              <p className="text-gray-400">
                Creative designs that captivate and elevate your brand identity effortlessly.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <div className="text-green-500 text-4xl mb-4">
                <MdDeliveryDining />
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">quick fast delivery</h3>
              <p className="text-gray-400">
                Boost your online presence with advanced SEO strategies and tools.
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <div className="text-green-500 text-4xl mb-4 ">
              <SiCodefresh />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% fresh foods</h3>
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
  