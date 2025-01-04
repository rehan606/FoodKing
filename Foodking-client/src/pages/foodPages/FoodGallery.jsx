import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const FoodGallery = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Open Modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };


  const images = [
    {
      src: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cg=auto%2Ch=675%2Cq=85%2Cw=1200/wp-content/uploads/national-fast-food-day.jpg",
      name: "John Doe",
      description: "Delicious burger with fries",
    },
    {
      src: "https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637349.jpg?semt=ais_hybrid",
      name: "Jane Smith",
      description: "Tasty sandwich platter",
    },
    {
      src: "https://www.hashtagburgersandwaffles.com.au/wp-content/uploads/2024/08/Why-Fast-Foods-Are-So-Successful.jpeg",
      name: "Mike Johnson",
      description: "Classic burger on wooden board",
    },
    {
      src: "https://i0.wp.com/societefacile.com/wp-content/uploads/2024/01/Tout-savoir-sur-le-Marche-des-fast-food.webp?fit=1024%2C591&ssl=1",
      name: "Sara Brown",
      description: "Veggie wrap with side fries",
    },
    {
      src: "https://png.pngtree.com/thumb_back/fw800/background/20230818/pngtree-fast-food-chicken-fried-steaks-image_13048736.jpg",
      name: "Tom Wilson",
      description: "Cheesy burgers with sauces",
    },
    {
      src: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg",
      name: "Alice Green",
      description: "Salad bowl with fresh veggies",
    },
    {
      src: "https://img.freepik.com/free-photo/fried-chicken-french-fries-black-cement-floor_1150-28542.jpg",
      name: "Robert King",
      description: "Loaded burgers and fries",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuSVJWuNogOHVg3FyGwGz4QFJ2-5wUMGGNEXXHR-LAfi3gzlNf0EQeFYIJ7dq4l-dPo4&usqp=CAU",
      name: "Emma White",
      description: "Healthy sandwich meal",
    },
    {
      src: "https://img.freepik.com/free-photo/fried-chicken-french-fries-black-cement-floor_1150-28542.jpg",
      name: "Chris Black",
      description: "Crispy fries and sauces",
    },
    {
      src: " https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg",
      name: "Sophia Blue",
      description: "Grilled burger with toppings",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUU3KOv3nHUy84oBJVHIHK1thSHt7e-vJwrQ&s",
      name: "Sophia Blue",
      description: "Grilled burger with toppings",
    },
    {
      src: "https://t3.ftcdn.net/jpg/06/41/56/46/360_F_641564611_z0nrp9vABp311NJTSI0m2xdCdCROrAmy.jpg",
      name: "Sophia Blue",
      description: "Grilled burger with toppings",
    },
  ];

  return (
    <div>
      <section className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </section>
      {/* Section Header */}
      <div className="headerbg ">
        <div className="w-11/12 mx-auto py-20">
          <h2 className="font-Oswald uppercase font-bold text-5xl text-white text-center">
            Food Gallery
          </h2>
        </div>
      </div>

      

      
        <div className="w-11/12 mx-auto py-8 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div
                key={index}
                onClick={() => openModal(image)}
                className="relative group overflow-hidden rounded-lg shadow-md"
                >
                <img
                    src={image.src}
                    alt={image.description}
                    className="w-full h-full object-cover group-hover:opacity-75 transition duration-300"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white p-4 transition duration-300">
                    <h3 className="text-lg font-semibold">{image.name}</h3>
                    <p className="text-sm mt-1">{image.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Modal */}
      {isOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg mx-auto">
            <button
              onClick={closeModal}
              className="absolute btn  bg-red-500 top-2 right-2 text-white hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.description}
              className="w-full rounded-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{selectedImage.name}</h3>
              <p className="text-sm mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <div>
          <Footer></Footer>
      </div>
    </div>
  );
};

export default FoodGallery;
