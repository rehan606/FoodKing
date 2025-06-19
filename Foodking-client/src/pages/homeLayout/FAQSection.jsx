import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is FoodKing?",
    answer: "FoodKing is your ultimate food delivery platform with delicious meals, recipes, and kitchen tips in one place.",
  },
  {
    question: "How do I place an order?",
    answer: "Just select your favorite meal, add to cart, and proceed to checkout. We deliver fast and fresh!",
  },
  {
    question: "Can I schedule orders in advance?",
    answer: "Yes, you can choose your preferred delivery time during checkout.",
  },
  {
    question: "Are the recipes beginner friendly?",
    answer: "Absolutely! We provide step-by-step instructions and tips for all levels of cooks.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Find answers to the most common questions about FoodKing.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 transition-shadow hover:shadow-md dark:hover:shadow-lg bg-white dark:bg-gray-800"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#29D9C2] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
