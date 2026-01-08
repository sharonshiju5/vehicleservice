'use client'
import SearchBar from '@/components/search/SearchBar'
import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
const page = () => {
  const [searchText, setSearchText] = useState('');
    const router = useRouter();
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
    </div>
  )
}


export default page
