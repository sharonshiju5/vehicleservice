import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // install lucide-react for icons

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What's included in a standard clean?",
    answer: "A standard clean includes dusting, vacuuming, mopping, and bathroom sanitization.",
  },
  {
    question: "How long does a cleaning session typically last?",
    answer: "A standard cleaning session typically lasts 2 to 3 hours depending on the size of the home.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "No, our cleaners bring their own eco-friendly supplies unless you prefer we use yours.",
  },
];


function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full max-w-md mx-auto mt-6 pb-18">
      <h2 className="font-medium text-base leading-[26px] tracking-[0.01px] mb-4">FAQ</h2>
      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4  bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-normal text-sm leading-[22px]">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 text-gray-700  ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-500 font-normal text-xs leading-[18px] tracking-[0.03px]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq