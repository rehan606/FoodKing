import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div>
        <section className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </section>
      {/* Section Header */}
      <div className="headerbg ">
        <div className="w-11/12 mx-auto py-20">
          <h2 className="font-Oswald uppercase font-bold text-5xl text-white text-center">
            Contact Us
          </h2>
        </div>
      </div>
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    />
                    <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    ></textarea>
                    <button
                    type="submit"
                    className="bg-[#22C55E] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-300"
                    >
                    Send Message
                    </button>
                </form>
                <div className="flex flex-col space-y-6 text-gray-700">
                    <div className="flex items-center space-x-4">
                    <FaPhoneAlt className="text-[#22C55E] text-2xl" />
                    <span>+880 1822 182207</span>
                    </div>
                    <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-[#22C55E] text-2xl" />
                    <span>contact@foodking.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-[#22C55E] text-2xl" />
                    <span>123 Food Street, Chittagong, Bangladesh</span>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
  );
};

export default Contact;
