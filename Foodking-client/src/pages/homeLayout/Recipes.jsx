import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const recipes = [
  {
    id: 1,
    title: "Spicy Chicken Curry",
    image: "https://shorturl.at/wwjyg",
    description: "A bold and flavorful chicken curry with rich spices.",
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
    image: "https://shorturl.at/Fmt85",
    description: "Simple delicious pizza topped with fresh basil and cheese.",
  },
  {
    id: 3,
    title: "Creamy Pasta Alfredo",
    image: "https://shorturl.at/3T5qd",
    description: "Smooth creamy pasta with a touch of garlic and herbs.",
  },
];

export default function RecipeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-16 px-4 md:px-12 dark:bg-[#111827] " id="recipes">
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-4 ">
          <span className="text-gray-600 dark:text-white" >Popular</span> 
          <span className="text-green-800"> Recipes</span></h2>
        <p className="text-gray-500 mb-12">Taste the best dishes chosen by our chefs.</p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, i) => (
            <motion.div
              key={recipe.id}
              data-aos="zoom-in"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border dark:border-white"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{recipe.title}</h3>
                <p className="mt-2 text-gray-600">{recipe.description}</p>
                <button className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  View Recipe
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
