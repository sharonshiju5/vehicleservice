import React, { useState } from 'react'
import Image from "next/image";
import Slider from "react-slick";
import { MdLocationOn, MdStar } from 'react-icons/md';
import MobileReview from '@/components/reviews/MobileReview';
import DesktopReview from '@/components/reviews/DesktopReview';
import MostPopular from '@/components/desktop/MostPopular';
import Faq from '@/components/desktop/Faq';
import ScheduleService from '@/components/desktop/ScheduleService';
import { useRouter } from 'next/navigation'

type Banner = {
  id: number;
  src: string;
  alt: string;
};

const banners: Banner[] = [
  {
    id: 1,
    src: "/assets/banner/banner.png", // replace with your uploaded banner
    alt: "Cashon Postpaid Zomato Banner",
  },
  {
    id: 2,
    src: "/assets/banner/banner.png",
    alt: "Zomato Offer Banner",
  },
  {
    id: 3,
    src: "/assets/banner/banner.png",
    alt: "Cashback Banner",
  },
];
function Desktop() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showSchedule, setShowSchedule] = useState(false)
  const router = useRouter()

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='w-full mt-2'>
      <div className="w-[80%]  mx-auto pt-12 ">
        <h1 className='font-medium text-[28px] leading-[40px] tracking-[0px] pb-2'>GreenThumb Gardens</h1>
        <div className="grid grid-cols-2 gap-4 rounded-lg overflow-hidden">
          {/* Video Frame */}
          <div className="relative h-full">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with your video link
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>

          {/* Right side with images */}
          <div className="grid grid-rows-2 gap-4">
            <Image
              src="/assets/service/s1.png"
              alt="Cleaning Service"
              width={618}
              height={220}
              className="rounded-lg w-full h-full object-cover"
            />
            <Image
              src="/assets/service/s2.png"
              alt="Laundry Service"
              width={618}
              height={220}
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        <h2 className="font-medium text-[28px] leading-[40px] tracking-[0px] pt-4">GreenThumb Gardens</h2>
        <div className="flex  items-center  ">
          <MdLocationOn className="text-black-500 w-5 h-5" />
          <p className="text-[24px] text-gray-500">Thiruvananthapuram </p>
          <MdStar className="text-yellow-500 w-5 h-5 ml-6" />
          <p className="text-[24px] text-yellow-500 mt-1"> 4.5 Rating</p>
        </div>
        <div className="w-full  flex">
          <div className="w-[50%] ">
            <h3 className="mt-4 font-medium text-[28px] leading-[40px] tracking-[0px]">About us</h3>
            <p className="font-normal text-[18px] leading-[28px] tracking-[0px] mt-2 pb-8">
              Sparkling Clean offers top-notch cleaning services tailored to your needs. Our standard clean includes dusting, vacuuming, mopping, and bathroom sanitization.Sparkling Clean offers top-notch cleaning services tailored to your needs. Our standard clean includes dusting, vacuuming, mopping, and bathroom sanitization.Sparkling Clean offers top-notch cleaning services tailored to your needs. Our standard clean includes dusting, vacuuming, mopping, and bathroom sanitization.Sparkling Clean offers top-notch cleaning services tailored to your needs. Our standard clean includes dusting, vacuuming, mopping, and bathroom sanitization.
            </p>
            <DesktopReview />
          </div>
          <div className="w-[50%] ">
            <div className="w-full h-fit  mx-auto sticky top-20 p-2">
              {showSchedule ? (
                <ScheduleService 
                  selectedPlan={selectedPlan!} 
                  onBack={() => setShowSchedule(false)} 
                />
              ) : (
              <>
              <div className="bg-white p-3  rounded-tl-3xl rounded-tr-3xl w-full h-full pt-6">
                <p className='text-[16px] leading-[24px] font-medium text-left tracking-[0px] pb-1'>Select plan</p>
                {/* bidding plan */}
                <div
                  onClick={() => setSelectedPlan('bidding')}
                  className={`w-full h-[140px] mt-2 border rounded-xl p-3 cursor-pointer transition-all duration-300 
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
                  className={`w-full h-[140px] mt-3 border rounded-xl p-3 cursor-pointer transition-all duration-300 
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
                  className={`w-full h-[140px] mt-3 border rounded-xl p-3 cursor-pointer transition-all duration-300 
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
              <div className="bg-white w-full flex justify-center items-center p-3 rounded-bl-3xl rounded-br-3xl">
                <button
                  disabled={!selectedPlan}
                  onClick={() => selectedPlan && setShowSchedule(true)}
                  className={`w-[90%] h-[42px] text-white rounded-xl font-medium text-sm transition-all duration-300 ${selectedPlan ? 'bg-[#7722FF]' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  Next
                </button>
              </div>
              </>)}
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 " />
        <MostPopular />
        {/* Banner Slider */}
        <div className="w-full h-[350px]  rounded-xl overflow-hidden mt-8">
          <Slider {...settings}>
            {banners.map((banner) => (
              <div key={banner.id} className="w-full">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={1200}
                  height={350}
                  className="w-full h-[350px] rounded-xl object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <Faq />

      </div>

    </div>
  )
}

export default Desktop