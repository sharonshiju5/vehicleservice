'use client'
import SearchBar from '@/components/search/SearchBar'
import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const page = () => {
  const [searchText, setSearchText] = useState('');
    const router = useRouter();
  const services = [
    { id: 1, title: 'Wheel Alignment', category: 'Leaky Faucet Repairs', price: 100, rating: 4.5, image: '/service1.jpg' },
    { id: 2, title: 'Full Body Painting', category: 'Leaky Faucet Repairs', price: 75, rating: 4.5, image: '/service2.jpg' },
    { id: 3, title: 'Full Body Painting', category: 'Leaky Faucet Repairs', price: 75, rating: 4.5, image: '/service2.jpg' },
    { id: 4, title: 'Wheel Alignment', category: 'Leaky Faucet Repairs', price: 100, rating: 4.5, image: '/service1.jpg' },
  ];
  console.log(searchText);
  
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='h-screen w-screen pt-4 px-4 space-y-4'>
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
      <div className='grid grid-cols-2 gap-4 mt-4'>
        {filteredServices.map((service) => (
          <div key={service.id} className='bg-white rounded-lg shadow-sm border border-gray-100'>
            <div className='relative'>
              <div className='w-full h-32 bg-gray-200 rounded-t-lg'></div>
              <div className='absolute bottom-2 right-2 bg-[#FF5C02] bg-opacity-50 text-white px-2  rounded flex items-center'>
                <span className='text-yellow-400 text-lg mr-1'>★</span>
                {service.rating}
              </div>
            </div>
            <div className='p-3'>
              <h3 className='font-medium text-sm mb-1'>{service.title}</h3>
              <p className='text-gray-500 text-xs mb-2'>{service.category}</p>
              <div className='flex justify-between items-center'>
                <span className='text-xs text-gray-600'>Starting from</span>
                <span className='font-semibold text-purple-600'>${service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
