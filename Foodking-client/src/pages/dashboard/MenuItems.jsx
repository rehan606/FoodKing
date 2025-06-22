import React from 'react';
import { FaEdit, FaTrashAlt, FaStar } from 'react-icons/fa';

const dummyMenu = [
  {
    id: 1,
    name: 'Classic Burger',
    price: 8.99,
    rating: 4.5,
    img: 'https://i.ibb.co/2Wz3dDn/burger.jpg',
  },
  {
    id: 2,
    name: 'Cheese Pizza',
    price: 10.99,
    rating: 4.8,
    img: 'https://i.ibb.co/xLQKnZb/pizza.jpg',
  },
  {
    id: 3,
    name: 'Pasta Alfredo',
    price: 12.49,
    rating: 4.7,
    img: 'https://i.ibb.co/JnmFzpt/pasta.jpg',
  },
  {
    id: 4,
    name: 'Veggie Wrap',
    price: 6.75,
    rating: 4.2,
    img: 'https://i.ibb.co/G9DkhvY/wrap.jpg',
  },
];

const MenuItems = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-green-600">🍽️ FoodKing Menu Items</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dummyMenu.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${item.price}</span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
