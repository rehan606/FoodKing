import { Lightbulb, UtensilsCrossed, Timer, Smile } from 'lucide-react';

const tips = [
  {
    icon: <Lightbulb className="w-8 h-8 text-green-700" />,
    title: "Cooking Hack",
    description: "Use a splash of vinegar to enhance the flavor of soups and sauces.",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-green-700" />,
    title: "Knife Skills",
    description: "Keep your knife sharp—it’s safer and makes prep faster and cleaner.",
  },
  {
    icon: <Timer className="w-8 h-8 text-green-700" />,
    title: "Timing Matters",
    description: "Let cooked meat rest before slicing to lock in juices.",
  },
  {
    icon: <Smile className="w-8 h-8 text-green-700" />,
    title: "Taste Test",
    description: "Always taste as you cook to balance seasoning and flavor.",
  },
];

const RecipeTips = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12  dark:bg-[#1F2937]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 ">
            <span className="text-gray-600 dark:text-white">Recipe</span> 
            <span className="text-green-700"> Tips</span> </h2>
        <p className="text-gray-600 dark:text-white mb-10">Discover expert kitchen advice to improve your cooking skills.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow hover:shadow-md transition">
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm  dark:text-gray-500">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeTips;
