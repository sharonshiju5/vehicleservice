'use client'
import SearchBar from '@/components/search/SearchBar'
import Image from 'next/image'
import React, { useState } from 'react'
import Filter from '../../../components/filter/Filter'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';

const page = () => {
  const [searchText, setSearchText] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState({})

  const handleApplyFilters = (filters: any) => {
    setAppliedFilters(filters)
    console.log('Applied filters:', filters)
  }
    const router = useRouter();

  return (
    <div className='h-screen w-screen pt-4 px-2 space-y-4'>
      <div className="flex items-center">
      <button
        onClick={() => router.back()} // same as navigate(-1)
        className="p-2"
        aria-label="Go back"
      >
        <ArrowLeft size={22} />
      </button>

      <h1 className="flex-1 text-center text-lg font-medium">
        Top Rated Providers
      </h1>
    </div>
      <SearchBar onSearch={setSearchText} />
      <div className='max-w-md mx-auto'>
        <div className='flex items-center justify-between p-2'>
          <h1 className='text-lg font-semibold'>Top Rated Providers</h1>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className='p-2 rounded-lg shadow-xs border-1 border-gray-200 px-4'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
        
        <div className='p-2 space-y-4 '>
          {[1, 2, 3].map((item) => (
            <div key={item} className='space-y-3 p-2 bg-white rounded-lg shadow-sm'>
              <div className='flex items-start space-x-3'>
                <Image
                  height={50} 
                  width={50}
                  src='/assets/service/foundm.png' 
                  alt='Provider' 
                  className='w-15 h-15 rounded-lg object-cover'
                />
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-medium'>Jhon Doe</h3>
                    <div className='flex items-center bg-green-100 px-2 py-1 rounded'>
                      <span className='text-green-600 font-bold text-sm'>★ 4.8</span>
                    </div>
                  </div>
                  <div className='flex items-center text-gray-500 text-sm mt-1'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                    </svg>
                    2km away
                  </div>
                  <div className='flex space-x-4 mt-2'>
                    <div>
                      <span className='text-red-500 text-sm font-medium'>Experience</span>
                      <p className='text-gray-500 text-sm'>10 Years</p>
                    </div>
                    <div>
                      <span className='text-red-500 text-sm font-medium'>Specialist</span>
                      <p className='text-gray-500 text-sm'>Puncture Repair</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className='w-full py-3 border border-orange-400 text-orange-500 rounded-lg font-medium hover:bg-orange-50'>
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      <Filter 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  )
}

export default page
