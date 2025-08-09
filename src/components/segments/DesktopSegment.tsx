import React, { useState, useEffect, useRef } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { getCategories } from '@/services/commonapi/commonApi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Category {
  id: string
  name: string
  image?: string
}

function DesktopSegment() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(6)
  const sliderRef = useRef<Slider>(null)
  const services = Array(12).fill('Bathroom clean')

  const fetchCategories = async (search: string = '') => {
    setLoading(true)
    try {
      const response = await getCategories(search)
      const categoriesArray = response?.data?.categories || []
      setCategories(categoriesArray)
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories(searchTerm)
  }, [searchTerm])

  const handleSearch = () => {
    setSearchTerm(searchInput)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    lazyLoad: 'ondemand' as const,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  const totalSlides = Math.ceil(categories.length / slidesToShow)
  const currentSlideGroup = Math.floor(currentSlide / slidesToShow) + 1

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
            placeholder="Search categories.................." 
            className="flex-1 py-2 sm:py-3 text-sm sm:text-base outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button 
          onClick={handleSearch}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:from-purple-600 hover:to-purple-700 transition-colors mt-2 sm:mt-0"
        >
          Search
        </button>
      </div>

      {/* Categories Slider */}
      <div className="mb-8 relative">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <div className="relative">
            {/* Touch Scroll Icons */}
            {categories.length > 5 && (
              <>
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </>
            )}
            
            <div className="category-slider pl-8">
              {Array.isArray(categories) && categories.length > 0 ? (
                <Slider ref={sliderRef} {...sliderSettings}>
                  {categories.map((category, index) => (
                    <div key={category?.id || index} className="flex justify-center">
                      <div className="flex flex-col items-center cursor-pointer" style={{ width: '180px', height: '180px' }}>
                        {/* Category Image */}
                        <div className="flex items-center justify-center" style={{ width: '180px', height: '140px' }}>
                          <img 
                            src={category?.image || "/assets/logo/seg.png"} 
                            alt={category?.name || 'Category'}
                            className="w-24 h-24 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Category Name */}
                        <div className="mt-2" style={{ height: '40px' }}>
                          <span 
                            className={`text-sm font-medium text-center block truncate ${
                              index === 0 ? 'text-purple-600' : 'text-gray-700'
                            }`}
                            style={{ 
                              color: index === 0 ? '#782FF8' : '#374151',
                              width: '180px'
                            }}
                          >
                            {category?.name || 'Unnamed Category'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No categories found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* subcategory Cards Grid */}
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