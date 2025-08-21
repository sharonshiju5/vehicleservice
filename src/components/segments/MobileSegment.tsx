import { getCategories, getSubCategories } from '@/services/commonapi/commonApi';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CiShop } from "react-icons/ci";
import { CategorySkeleton, SubcategorySkeleton } from '@/components/ui/SkeletonLoader';

interface Category {
    id: string
    name: string
    image?: string
}

function MobileSegment() {
    const [active, setActive] = useState<string>("");
    const [categories, setCategories] = useState<Category[]>([])
    const [subcategories, setSubCategories] = useState<Category[]>([])
    const [showAll, setShowAll] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [isSubcatLoading, setIsSubcatLoading] = useState(false)

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
        } finally {
            setIsLoading(false)
        }
    }

    const handleGetSubCategories = async (categoryId: string, search: string = '', page: number = 1) => {
        setIsSubcatLoading(true)
        try {
            const limit = showAll ? 1000 : 12
            const response = await getSubCategories(search, page, limit, categoryId || '');
            const subcats = response?.data?.subCategories || [];
            const totalPages = response?.data?.totalPages || 1;
            setSubCategories(subcats);
            setTotalPages(totalPages);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
            setSubCategories([]);
        } finally {
            setIsSubcatLoading(false)
        }
    };

    const handleCategoryClick = (categoryId: string) => {
        setActive(categoryId)
        setShowAll(false)
        setCurrentPage(1)
        handleGetSubCategories(categoryId, '', 1)
    }

    const handleSeeAllClick = () => {
        setShowAll(true)
        handleGetSubCategories(active, '', 1)
    }

    useEffect(() => {
        const loadData = async () => {
            const cats = await fetchCategories()
            if (cats && cats.length > 0) {
                await handleGetSubCategories(cats[0].id, '', 1)
            }
        }
        loadData()
    }, [])

    useEffect(() => {
        if (active) {
            handleGetSubCategories(active, '', currentPage)
        }
    }, [showAll])

    return (
        <div className='mt-2 w-full'>
            <div className="w-[90%] relative flex mx-auto items-center justify-between py-2">
                <p className='font-medium text-[16px] leading-[26px] tracking-[0.01px]'>
                    Categories
                </p>
                <Link href="/seeall">
                    <p className='font-medium text-[12px] leading-[26px] tracking-[0.01px] text-[#782FF8]'>See All</p>
                </Link>
            </div>
            <div className="w-full p-2">
                {/* Top Scrollable Tabs */}
                {isLoading ? (
                    <CategorySkeleton />
                ) : (
                    <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6">
                        {categories.map((cat, index) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
                                ${active === cat.id
                                        ? "border-purple-500 bg-purple-50 text-purple-600"
                                        : "border-gray-200 bg-white text-gray-500"
                                    } ${index === 0 ? "ml-2" : ""}`}
                            >
                                <CiShop className="w-4 h-4" />
                                <span className="whitespace-nowrap text-sm">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                )}

                {/* Bottom Grid */}
                {isLoading || isSubcatLoading ? (
                    <SubcategorySkeleton />
                ) : (
                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                        {subcategories.slice(0, showAll ? subcategories.length : 12).map((subcat) => (
                            <Link key={subcat.id} href="/servicedeatils">
                                <div className="flex flex-col items-center justify-center p-2  rounded-lg hover:shadow">
                                    <img src={subcat.image || "/assets/logo/seg.png"} alt={subcat.name} className="w-[58px] h-[58px] object-contain mb-2 rounded-lg" />
                                    <span className="text-gray-500 text-[10px] font-medium text-center leading-tight">{subcat.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* See All Button */}
                {!showAll && subcategories.length > 12 && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleSeeAllClick}
                            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                        >
                            See All ({subcategories.length})
                        </button>
                    </div>
                )}

                {/* Show Less Button */}
                {showAll && subcategories.length > 12 && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setShowAll(false)}
                            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MobileSegment