import React from 'react'

export const CategorySkeleton = () => (
  <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 animate-pulse ${i === 0 ? "ml-2" : ""}`}>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-16 h-4 bg-gray-300 rounded"></div>
      </div>
    ))}
  </div>
)

export const SubcategorySkeleton = () => (
  <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
    {[...Array(12)].map((_, i) => (
      <div key={i} className="flex flex-col items-center justify-center p-4 rounded-lg animate-pulse">
        <div className="w-[53px] h-[53px] bg-gray-300 rounded mb-2"></div>
        <div className="w-12 h-3 bg-gray-300 rounded"></div>
      </div>
    ))}
  </div>
)