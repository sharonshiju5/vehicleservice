import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CiSearch } from 'react-icons/ci'
import { motion } from 'framer-motion'
import { getCategories, getSubCategories } from '@/services/commonapi/commonApi'
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
  const [subcategories, setSubCategories] = useState<Category[]>([])

  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(6)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(12)
  const sliderRef = useRef<Slider>(null)
  const services = Array(12).fill('Bathroom clean')

  const fetchCategories = async (search: string = '') => {
    setLoading(true)
    try {
      const response = await getCategories(search)
      const categoriesArray = response?.data?.categories || []
      setCategories(categoriesArray)
      return categoriesArray
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      setCategories([])
      return []
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const loadData = async () => {
      const cats = await fetchCategories(searchTerm);
      if (cats && cats.length > 0) {
        setSelectedCategoryId(cats[0].id);
      }
      setCurrentPage(1);
      await handleGetSubCategories('', '', 1);
    };
    loadData();
  }, [searchTerm])



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSearchButtonClick = () => {
    setSearchTerm(searchInput)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchButtonClick()
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

  const handleGetSubCategories = async (categoryId: string, search: string, page: number = currentPage) => {
    try {
      const response = await getSubCategories(search, page, 12, categoryId || '');
      const subcats = response?.data?.subCategories || [];
      const totalPages = response?.data?.totalPages || 1;
      setSubCategories(subcats);
      setTotalPages(totalPages);
      console.log("Subcategories:", subcats);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      setSubCategories([]);
    }
  };
 

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Our Most Popular Categories</h1>
        <p className="text-sm sm:text-base text-gray-600">Discover the most booked and trusted home services in your area.</p>
      </div>

      {/* Search Bar */}
      <div className="lg:w-[50%] md:w-[60%] flex mx-auto mb-6 sm:mb-8">
        <div className="relative flex-1">
          <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[var(--primary-color)] text-base" />
          <input
            type="text"
            className="w-full bg-[#f2f2f2] pl-10 pr-4 py-3 text-[var(--primary-color)] text-xs placeholder:text-[var(--primary-color)] rounded-lg focus:outline-none h-12"
            value={searchInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Search anything..."
          />
        </div>

        <button
          className="px-10 text-sm rounded-lg text-white  ml-2 bg-[#5818BF] hover:from-purple-600 hover:to-purple-700 transition-colors h-12"
          onClick={handleSearchButtonClick}
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
                    <motion.div 
                      key={category?.id || index} 
                      className="flex justify-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedCategoryId(category.id);
                        setCurrentPage(1);
                        handleGetSubCategories(category.id, '', 1);
                      }}>
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
                            className={`text-sm font-medium text-center block truncate ${index === 0 ? 'text-purple-600' : 'text-gray-700'
                              }`}
                            style={{
                              color: '#374151',
                              width: '180px'
                            }}
                          >
                            {category?.name || 'Unnamed Category'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
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
        {subcategories.length > 0 ? (subcategories.map((subcat, index) => (
          <motion.div
            key={subcat.id}
            className="bg-white rounded-xl shadow-sm flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer w-full max-w-xs"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="bg-gray-100 rounded-xl flex items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            >
              <img
                src={subcat.image}
                alt={subcat.name}
                className="w-full h-full rounded-xl  object-contain"
              />
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
              {subcat.name}
            </div>
          </motion.div>
        ))) : (
          <div className="text-center py-8 text-gray-500 col-span-full">
            No subcategories found
          </div>
        )}
      </div>

      {/* Pagination */}
      {subcategories.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 gap-4">
          <button
            onClick={async () => {
              if (currentPage > 1) {
                const newPage = currentPage - 1;
                setCurrentPage(newPage);
                await handleGetSubCategories('', '', newPage);
              }
            }}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5 text-black hover:text-gray-700" />
          </button>
          
          <div className="bg-[#F5F5F5] px-4 py-2 rounded">
            <span className="font-bold text-[#00C46C]">{currentPage.toString().padStart(2, '0')}</span>
            <span className="text-black"> / {totalPages.toString().padStart(2, '0')}</span>
          </div>
          
          <button
            onClick={async () => {
              if (currentPage < totalPages) {
                const newPage = currentPage + 1;
                setCurrentPage(newPage);
                await handleGetSubCategories('', '', newPage);
              }
            }}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-5 h-5 text-black hover:text-gray-700" />
          </button>
        </div>
      )}
    </div>
  )
}

export default DesktopSegment