import React from 'react'
import { Search } from 'lucide-react'

function DesktopSegment() {
  const categories = Array(6).fill('Home service')
  const services = Array(12).fill('Bathroom clean')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Our Most Popular Categories</h1>
        <p className="text-sm sm:text-base text-gray-600">Discover the most booked and trusted home services in your area.</p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center max-w-2xl mx-auto mb-6 sm:mb-8 bg-white rounded-full shadow-sm border">
        <div className="flex items-center flex-1 px-4">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
          <input 
            type="text" 
            placeholder="Search anything.................." 
            className="flex-1 py-2 sm:py-3 text-sm sm:text-base outline-none"
          />
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:from-purple-600 hover:to-purple-700 transition-colors mt-2 sm:mt-0">
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center cursor-pointer transition-colors hover:bg-gray-50 p-2 rounded-lg"
            >
              <img 
                src="/assets/logo/seg.png" 
                alt={category}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-1 sm:mb-2 rounded-lg"
              />
              <span className={`text-xs sm:text-sm font-medium text-center ${
                index === 0 ? 'text-purple-600' : 'text-gray-700'
              }`}>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer w-full max-w-xs"
          >
            <div
              className="bg-gray-100 rounded-xl flex items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            >
              <img
                src="/assets/logo/seg.png"
                alt={service}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
              />
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
              Bathroom <br /> clean
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default DesktopSegment