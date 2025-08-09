import Banner from '@/components/banner/Banner'
import DesktopHeader from '@/components/header/DesktopHeader'
import DesktopSegment from '@/components/segments/DesktopSegment'
import RecentlyUsed from '@/components/segments/RecentlyUsed'
import React from 'react'

function Desktop() {
  return (
    <div>
            
            <div className="bg-white h-auto w-[80%] mx-auto pb-12">
                {/* Segment */}
                <DesktopSegment />

                {/* Additional Content */}
                <div className="flex items-start justify-center w-full min-h-[240px] py-2">
                    <div className="flex h-auto w-full max-w-7xl mx-auto bg-gradient-to-r from-white via-[#E5D4FF] to-[#C7D2FE] rounded-[20px] relative p-6 gap-4">

                        {/* Left Side: Text */}
                        <div className="flex flex-col justify-start flex-1 space-y-6 pt-1">
                            <h2 className="text-[36px] lg:text-[44px] font-semibold text-[#1E1E1E] leading-tight">
                                Home Improvement & Repair Simplified
                            </h2>
                            <p className="text-[#8B8B8B] text-[16px] lg:text-[18px] max-w-[600px]">
                                Every Seclob professional completes a rigorous multi‑stage vetting process police‑verified
                            </p>
                        </div>

                        {/* Right Side: Image */}
                        <div className="flex items-end justify-end flex-1">
                            <img
                                src="/assets/landing/serving.png"
                                alt="Service People"
                                className="h-[340px] object-contain"
                            />
                        </div>

                    </div>
                </div>
                
                {/* Banner*/}
                <Banner />

                <RecentlyUsed/>



            </div>

        </div>
  )
}

export default Desktop