'use client'
import React, { useState, useEffect } from 'react'

interface FilterProps {
  isOpen: boolean
  onClose: () => void
  onApplyFilters: (filters: any) => void
}

const Filter: React.FC<FilterProps> = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    popular: 'recommended',
    distance: '',
    availability: '',
    gender: ''
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleFilterChange = (category: string, value: string) => {
    setFilters(prev => ({ ...prev, [category]: value }))
  }

  const clearAll = () => {
    setFilters({ popular: '', distance: '', availability: '', gender: '' })
  }

  const applyFilters = () => {
    onApplyFilters(filters)
    handleClose()
  }

  if (!isOpen) return null

  return (
 <div>
       <div className={`fixed inset-0 transition-all duration-300 ease-in-out overflow-y-auto z-50 backdrop-blur-xs ${isVisible ? ' bg-opacity-50' : 'bg-opacity-0'}`}>
      <div className={`absolute border-gray-300 border-1 top-24 bottom-0 left-0 right-0 h-full bg-white rounded-t-3xl transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className='p-6 pb-24'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center space-x-2'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z' />
            </svg>
            <span className='font-medium'>Filter</span>
          </div>
          <button onClick={handleClose} className='p-2'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        <div className='space-y-6'>
          <div>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-medium'>Popular</h3>
              <button onClick={clearAll} className='text-orange-500 text-sm'>Clear All</button>
            </div>
            <div className='space-y-3'>
              {['Recommended', 'Nearest First', 'Highest Rated', 'Most Experienced', 'Lowest Price', 'Highest Price'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="popular"
                    checked={filters.popular === option.toLowerCase().replace(' ', '')}
                    onChange={() => handleFilterChange('popular', option.toLowerCase().replace(' ', ''))}
                    className="peer hidden"
                  />
                  <span className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                    filters.popular === option.toLowerCase().replace(' ', '') 
                      ? 'border-orange-500 bg-orange-500' 
                      : 'border-gray-400'
                  }`}>
                    {filters.popular === option.toLowerCase().replace(' ', '') && (
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  <span className='text-sm'>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className='font-medium mb-4'>Distance</h3>
            <div className='space-y-3'>
              {['Within 1 km', 'Within 3 km', 'Within 10 km', 'Any Distance'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="distance"
                    checked={filters.distance === option.toLowerCase().replace(' ', '')}
                    onChange={() => handleFilterChange('distance', option.toLowerCase().replace(' ', ''))}
                    className="peer hidden"
                  />
                  <span className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                    filters.distance === option.toLowerCase().replace(' ', '') 
                      ? 'border-orange-500 bg-orange-500' 
                      : 'border-gray-400'
                  }`}>
                    {filters.distance === option.toLowerCase().replace(' ', '') && (
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  <span className='text-sm'>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className='font-medium mb-4'>Availability</h3>
            <div className='space-y-3'>
              {['Available Today', 'Available Now', 'Available This Week', 'Custom Date'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="availability"
                    checked={filters.availability === option.toLowerCase().replace(' ', '')}
                    onChange={() => handleFilterChange('availability', option.toLowerCase().replace(' ', ''))}
                    className="peer hidden"
                  />
                  <span className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                    filters.availability === option.toLowerCase().replace(' ', '') 
                      ? 'border-orange-500 bg-orange-500' 
                      : 'border-gray-400'
                  }`}>
                    {filters.availability === option.toLowerCase().replace(' ', '') && (
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  <span className='text-sm'>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className='font-medium mb-4'>Gender Preference</h3>
            <div className='space-y-3'>
              {['Male', 'Female', 'Any'].map((option) => (
               <label key={option} className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="gender"
                    checked={filters.gender === option.toLowerCase()}
                    onChange={() =>
                      handleFilterChange("gender", option.toLowerCase())
                    }
                    className="peer hidden"
                  />
                  <span className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                    filters.gender === option.toLowerCase() 
                      ? 'border-orange-500 bg-orange-500' 
                      : 'border-gray-400'
                  }`}>
                    {filters.gender === option.toLowerCase() && (
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
        <div className='fixed bottom-4 left-4 right-4 z-50'>
          <button 
            onClick={applyFilters}
            className='w-full text-white py-4 rounded-xl font-medium'
            style={{ background: 'linear-gradient(180deg, #0F4C81 0%, #00B4D8 100%)' }}
          >
            Apply Filter
          </button>
        </div>
 </div>
  )
}

export default Filter