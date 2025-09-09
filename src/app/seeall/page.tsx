'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { CiSearch, CiShop } from 'react-icons/ci';
import { getCategories, getSubCategories } from '@/services/commonapi/commonApi';
import Link from 'next/link';

interface Category {
  id: string
  name: string
  image?: string
}

function Page() {
  const router = useRouter()
  const [active, setActive] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([])
  const [subcategories, setSubCategories] = useState<Category[]>([])

  const fetchCategories = async (search: string = '') => {
    try {
      const response = await getCategories(search)
      const categoriesArray = response?.data?.categories || []
      setCategories(categoriesArray)
      if (categoriesArray.length > 0 && !active) {
        setActive(categoriesArray[0].id)
      }
      return categoriesArray
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      setCategories([])
      return []
    }
  }

  const handleGetSubCategories = async (categoryId: string, search: string = '') => {
    try {
      const response = await getSubCategories(search, 1, 1000, categoryId || '');
      const subcats = response?.data?.subCategories || [];
      setSubCategories(subcats);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      setSubCategories([]);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActive(categoryId)
    handleGetSubCategories(categoryId, '')
  }

  useEffect(() => {
    const loadData = async () => {
      const cats = await fetchCategories()
      if (cats && cats.length > 0) {
        await handleGetSubCategories(cats[0].id, '')
      }
    }
    loadData()
  }, [])

  return (
    <div className='w-full'>
      <div className="w-full bg-white shadow-sm px-4 py-4 flex items-center gap-3 text-center ">
        <button onClick={() => router.back()} className="p-2 -ml-2">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <p className='font-medium text-[16px] leading-[18px] tracking-[-0.36px] text-center'>Categories</p>
      </div>

      <div className="w-full p-4">
        <div className="flex items-center w-full mx-auto max-w-md px-4 py-2 border-[#D2D2D2] rounded-md border border-gray-200  bg-white mt-2 mb-4">
          <CiSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full h-[30px] outline-none text-gray-600 placeholder-gray-400 text-sm"
          />
        </div>
        {/* Top Scrollable Tabs */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
              ${active === cat.id
                  ? "border-purple-500 bg-purple-50 text-purple-600"
                  : "border-gray-200 bg-white text-gray-500"
                }`}
            >
              <CiShop className="w-4 h-4" />
              <span className="whitespace-nowrap text-sm">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
          {subcategories.map((subcat) => (
            <Link key={subcat.id} href={`/oneservicedeatils/${subcat.id}`}>
              <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg hover:shadow">
                <img src={subcat.image || "/assets/logo/seg.png"} alt={subcat.name} className="w-[58px] h-[58px] object-contain mb-2 rounded-lg" />
                <span className="text-gray-500 text-[10px] font-medium text-center leading-tight">{subcat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Page