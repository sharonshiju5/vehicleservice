import React, { useState } from 'react'
import { MdLocationOn, MdStar } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import MobileReview from '../reviews/MobileReview'
import MostPopularServices from './MostPopularServices'
import Servicedeatilbanner from './Servicedeatilbanner'
import Faq from './Faq'


function ServiceContent() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const router = useRouter()
  return (
    <div>
      <div className="flex-1 px-4 py-6 bg-white rounded-t-3xl">
        <h2 className="font-[500] text-[16px] leading-[26px] tracking-[0.01px]">GreenThumb Gardens</h2>
        <div className="flex pt-2 items-center ">
          <MdLocationOn className="text-black-500 w-5 h-5" />
          <p className="text-sm text-gray-500">Thiruvananthapuram </p>
          <MdStar className="text-yellow-500 w-5 h-5 ml-6" />
          <p className="text-sm text-yellow-500 mt-1"> 4.5 Rating</p>
        </div>
        <h3 className="mt-4 font-medium text-[16px] leading-[26px] tracking-[0.01px]">About us</h3>
        <p className="font-normal text-[14px] leading-[22px] tracking-[0px] mt-2">
          Sparkling Clean offers top-notch cleaning services tailored to your
          needs. Our standard clean includes dusting, vacuuming, mopping, and
          bathroom sanitization.
        </p>

        <hr className="my-4 border-gray-200 " />
        <MobileReview />
        <hr className="my-4 border-gray-200 " />
        <MostPopularServices />
        <hr className="my-4 border-gray-200 " />
        <Servicedeatilbanner />
        <hr className=" border-gray-200 " />
        <Faq />

      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white  h-[75px] flex items-center z-50">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className='w-[90%] mx-auto h-[42px] text-white bg-[#7722FF] rounded-xl font-medium text-sm leading-[22px]'
        >
          Next
        </button>
      </div>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-40 backdrop-blur-sm"
            onClick={() => setShowDropdown(false)}
          />
          <div className="fixed bottom-0 left-0 w-full z-50 animate-slide-up  ">
            <div className="bg-white   p-3 shadow-lg rounded-tl-3xl rounded-tr-3xl pt-6">
              <p className='text-[16px] leading-[24px] font-medium text-left tracking-[0px] pb-1'>Select plan</p>
              {/* bidding plan */}
              <div
                onClick={() => setSelectedPlan('bidding')}
                className={`w-90 mt-2 border rounded-xl p-3 cursor-pointer transition-all duration-300 
                 ${selectedPlan === 'bidding' ? "border-purple-500 shadow-md" : "border-gray-200"}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className={`font-medium text-sm transition-colors duration-300 ${selectedPlan === 'bidding' ? "text-purple-500" : "text-gray-800"}`}>
                    Bidding Plan
                  </h2>
                  <span className={`text-white text-xs w-[50px] text-center px-2 py-1 rounded-full transition-colors duration-300 bg-[#8948F9]`}>
                    1/4
                  </span>
                </div>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className={`text-sm transition-colors duration-300 ${selectedPlan === 'bidding' ? "text-purple-500" : ""}`}>•</span>
                    <span className={selectedPlan === 'bidding' ? "text-purple-500" : ""}>Monthly performance report</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`text-sm transition-colors duration-300 ${selectedPlan === 'bidding' ? "text-purple-500" : ""}`}>•</span>
                    <span className={selectedPlan === 'bidding' ? "text-purple-500" : ""}>Basic profile customization</span>
                  </li>
                </ul>
              </div>
              {/* normal plan */}
              <div
                onClick={() => setSelectedPlan('normal')}
                className={`w-90 mt-3 border rounded-xl p-3 cursor-pointer transition-all duration-300 
                 ${selectedPlan === 'normal' ? "border-purple-500 shadow-md" : "border-gray-200"}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className={`font-medium text-sm transition-colors duration-300 ${selectedPlan === 'normal' ? "text-purple-500" : "text-gray-800"}`}>
                    Normal plan
                  </h2>
                  <span className={`text-white text-xs px-2 w-[50px] text-center py-1 rounded-full transition-colors duration-300 bg-[#8948F9]`}>
                    free
                  </span>
                </div>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className={`text-sm transition-colors duration-300 ${selectedPlan === 'normal' ? "text-purple-500" : ""}`}>•</span>
                    <span className={selectedPlan === 'normal' ? "text-purple-500" : ""}>Monthly performance report</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`text-sm transition-colors duration-300 ${selectedPlan === 'normal' ? "text-purple-500" : ""}`}>•</span>
                    <span className={selectedPlan === 'normal' ? "text-purple-500" : ""}>Basic profile customization</span>
                  </li>
                </ul>
              </div>
              {/* premium plan */}
              <div
                onClick={() => setSelectedPlan('premium')}
                className={`w-90 mt-3 border rounded-xl p-3 cursor-pointer transition-all duration-300 
                 ${selectedPlan === 'premium' ? "border-purple-500 shadow-md" : "border-gray-200"}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className={`font-medium text-sm transition-colors duration-300 ${selectedPlan === 'premium' ? "text-purple-500" : "text-gray-800"}`}>
                    Premium plan
                  </h2>
                  <span className={`text-white text-xs px-2 w-[70px] text-center py-1 rounded-full transition-colors duration-300 bg-[#8948F9]`}>
                    Pro plan
                  </span>
                </div>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className={`text-sm transition-colors duration-300 ${selectedPlan === 'premium' ? "text-purple-500" : ""}`}>•</span>
                    <span className={selectedPlan === 'premium' ? "text-purple-500" : ""}>Monthly performance report</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`text-sm transition-colors duration-300 ${selectedPlan === 'premium' ? "text-purple-500" : ""}`}>•</span>
                    <span className={selectedPlan === 'premium' ? "text-purple-500" : ""}>Basic profile customization</span>
                  </li>
                </ul>
              </div>

            </div>
            <div className="bg-white w-full flex justify-center items-center p-3">
              <button 
                disabled={!selectedPlan}
                onClick={() => selectedPlan && router.push('/scheduleservice')}
                className={`w-[90%] h-[42px] text-white rounded-xl font-medium text-sm transition-all duration-300 ${selectedPlan ? 'bg-[#7722FF]' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ServiceContent