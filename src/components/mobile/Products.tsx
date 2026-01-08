import React, { useState } from 'react'
import Image from 'next/image'

const Products = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do i change my password?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet et massa sit amet tempor. Quisque egestas venenatis nisl, sed rhoncus nunc aliquam nec. Donec tortor felis"
    },
    {
      question: "How do i change my password?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet et massa sit amet tempor. Quisque egestas venenatis nisl, sed rhoncus nunc aliquam nec. Donec tortor felis"
    },
    {
      question: "How do i change my password?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet et massa sit amet tempor. Quisque egestas venenatis nisl, sed rhoncus nunc aliquam nec. Donec tortor felis"
    },
    {
      question: "How do i change my password?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet et massa sit amet tempor. Quisque egestas venenatis nisl, sed rhoncus nunc aliquam nec. Donec tortor felis"
    }
  ]

  return (
    <div className="w-full  py-6 bg-white">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-6 px-4">Tune in with Seclob Products</h2>
      
      {/* Product Cards */}
      <div className="flex gap-4 overflow-x-auto mb-8 px-4">
        {/* Seclob Aura Card */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-r from-blue-50 to-orange-100 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-900">Seclob </span>
                  <span className="text-2xl font-bold text-orange-400">Aura</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">YOUR SALON, UNIFIED.</p>
              <button className="bg-orange-400 text-white px-6 py-2 rounded-full font-medium">
                Download 
              </button>
            </div>
            <div className="relative">
              <div className="w-16 h-20 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-300 rounded-full opacity-30"></div>
          <div className="absolute -right-4 top-8 w-20 h-20 bg-orange-400 rounded-full opacity-40"></div>
        </div>

        {/* Second Card (partially visible) */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-r from-purple-50 to-blue-100 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-purple-900">Secl</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <h3 className="text-lg font-semibold mb-6 px-4">
        One-stop for All Local Businesses, Services, & Stores Nearby Across India
      </h3>

      {/* FAQ Section */}
      <div className="space-y-4 px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-[16px] font-medium text-gray-900">
                {faq.question}
              </span>
              <div className="flex-shrink-0 ml-4">
                <div
                  className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-transform ${
                    openFaq === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
