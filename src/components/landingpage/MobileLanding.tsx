import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import MobileHeader from "../header/MobileHeader";
import MobileSegment from "../segments/MobileSegment";
import Mobilebanner from "../banner/Mobilebanner";
import MostBooked from "../mobile/MostBooked";
import Popular from "../mobile/Popular";
import Services from "../mobile/Services";
import Refer from "../mobile/Refer";
import Mobilefooter from "../footer/Mobilefooter";
import { onSearch } from '@/services/commonapi/commonApi';

interface SearchCategory {
  id: string;
  name: string;
  image?: string;
}

interface SearchSubcategory {
  id: string;
  name: string;
  image?: string;
  unique_id: string;
  category?: { name: string };
}

interface SearchResults {
  category?: { categories: SearchCategory[] };
  subcategory?: { subCategories: SearchSubcategory[] };
}

const MobileLanding = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState<SearchResults | null>(null)
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
    const searchRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchInput(value)
        if (value.trim()) {
            handleSearch(value)
        } else {
            setShowDropdown(false)
        }
    }

    const handleSearch = async (query: string) => {
        const params = {
            search: query,
            page: 1,
            limit: 12
        };
        try {
            const res = await onSearch(params);
            setSearchResults(res.data)
            setShowDropdown(true)
        } catch (error) {
            console.error('Search error:', error)
        }
    }

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategoryId(categoryId)
        setShowDropdown(false)
    }

    const handleSubcategoryClick = (subcategory: SearchSubcategory) => {
        const city = localStorage.getItem('city') || ''
        const url = `${city}/${subcategory.name.replace(/\s+/g, '-').toUpperCase()}/${subcategory.unique_id}`
        window.location.href = url
        setShowDropdown(false)
    }

    return (
        <div className="bg-white">
            <MobileHeader />
            <div ref={searchRef} className="relative w-[90%] mx-auto max-w-md mt-4">
                <div className="flex items-center px-4 py-2 border-[#D2D2D2] rounded-md border border-gray-200 bg-white">
                    <CiSearch className="text-gray-400 text-xl" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleInputChange}
                        onFocus={() => searchInput.trim() && setShowDropdown(true)}
                        className="ml-2 w-full h-[30px] outline-none text-gray-600 placeholder-gray-400 text-sm"
                    />
                </div>
                
                {/* Search Dropdown */}
                {showDropdown && searchResults && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto mt-1">
                        {/* Categories */}
                        {searchResults.category?.categories && searchResults.category.categories.length > 0 && (
                            <div className="p-3">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
                                {searchResults.category.categories.map((category: SearchCategory) => (
                                    <div
                                        key={category.id}
                                        className="flex items-center p-2 hover:bg-gray-50 cursor-pointer rounded"
                                        onClick={() => handleCategoryClick(category.id)}
                                    >
                                        <Image
                                            src={category.image || "/assets/logo/seg.png"}
                                            alt={category.name}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-cover rounded mr-3"
                                        />
                                        <span className="text-sm text-gray-800">{category.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {/* Subcategories */}
                        {searchResults.subcategory?.subCategories && searchResults.subcategory.subCategories.length > 0 && (
                            <div className="p-3 border-t border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">Services</h3>
                                {searchResults.subcategory.subCategories.map((subcategory: SearchSubcategory) => (
                                    <div
                                        key={subcategory.id}
                                        className="flex items-center p-2 hover:bg-gray-50 cursor-pointer rounded"
                                        onClick={() => handleSubcategoryClick(subcategory)}
                                    >
                                        <Image
                                            src={subcategory.image || "/assets/logo/seg.png"}
                                            alt={subcategory.name}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-cover rounded mr-3"
                                        />
                                        <div>
                                            <span className="text-sm text-gray-800 block">{subcategory.name}</span>
                                            <span className="text-xs text-gray-500">{subcategory.category?.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {(!searchResults.category?.categories?.length && !searchResults.subcategory?.subCategories?.length) && (
                            <div className="p-4 text-center text-gray-500 text-sm">
                                No results found
                            </div>
                        )}
                    </div>
                )}
            </div>
            <MobileSegment selectedCategoryId={selectedCategoryId} />
            <Mobilebanner/>
            <MostBooked/>
            <Popular/>
            <Services/>
            <div className="w-[90%] mx-auto pb-[87px]">
                <Refer/>
            </div>
            <Mobilefooter/>

        </div>
    );
}
export default MobileLanding;