import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Slider from "react-slick";
import { MdLocationOn, MdStar } from 'react-icons/md';
import DesktopReview from '@/components/reviews/DesktopReview';
import MostPopular from '@/components/desktop/MostPopular';
import Faq from '@/components/desktop/Faq';
import ScheduleService from '@/components/desktop/ScheduleService';
import {  getPackages, serviceDeatil } from '@/services/commonapi/commonApi';
import { useParams } from "next/navigation";

type Banner = {
  id: number;
  src: string;
  alt: string;
};

type PackageType = {
  id: string;
  tittle: string;
  description: string;
  durationType: string;
  features: string[];
  amount: { inr: number; usd: number };
  offerPrice: { inr: number; usd: number };
  gst: { inr: number; usd: number };
  percentage: { inr: number; usd: number };
  type: string;
};

type ServiceType = {
  success: boolean;
  data: {
    subCategories: {
      name: string;
      description: string;
      image?: string;
      detailsImage?: {
        filePath: string;
        key: string;
        _id: string;
      }[];
      detailsVideo?: {
        filePath: string;
        key: string;
      };
    }[];
  };
};

const banners: Banner[] = [
  {
    id: 1,
    src: "/assets/banner/banner.png",  // replace with your uploaded banner
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


interface DesktopProps {
  id: string;
}

function DeskTop({ id }: DesktopProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showSchedule, setShowSchedule] = useState(false)
  const [packages, setPackages] = useState<PackageType[]>([])
  const [expandedPackages, setExpandedPackages] = useState<Set<string>>(new Set())
  const [service, setService]= useState<ServiceType | null>(null)

  const params = useParams();
  const uniqueId = params.subcategoryId ;


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
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await getPackages();
        if (res?.success && res?.data?.packages) {
          setPackages(res.data.packages);
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchPackages();
  }, []);

  const handleGetDetails=async()=>{
   try {
    if (typeof uniqueId === 'string') {
      const res= await serviceDeatil(uniqueId);
      console.log("Service Details:", res);
        if(res?.success ){
          setService(res)
        }
    }
   } catch (error) {
    console.error("Error fetching package details:", error);
   }
  }
  useEffect(()=>{
    handleGetDetails()
  },[uniqueId])

  useEffect(() => {
    if (service) {
      console.log("Service state updated:", service);
      console.log("Service name:", service.data.subCategories[0].name);
    }
  }, [service])

  return (
    <div className='w-full mt-2'>
      <div className="w-[80%]  mx-auto pt-12 ">
        <h1 className='font-medium text-[28px] leading-[40px] tracking-[0px] pb-2'>{service?.data?.subCategories?.[0]?.name || 'Loading...'}</h1>
        <div className="grid grid-cols-2 gap-4 rounded-lg overflow-hidden">
          {/* Video Frame */}
          <div className="relative h-full">
            <video
              src={service?.data?.subCategories?.[0]?.detailsVideo?.filePath}
              controls
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Right side with images */}
          <div className="grid grid-rows-2 gap-4">
            <div className="relative h-[220px]">
              <Image
                src={service?.data?.subCategories?.[0]?.detailsImage?.[0]?.filePath || "/assets/service/s1.png"}
                alt="Cleaning Service"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-[220px]">
              <Image
                src={service?.data?.subCategories?.[0]?.detailsImage?.[1]?.filePath || "/assets/service/s1.png"}
                alt="Laundry Service"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <h2 className="font-medium text-[28px] leading-[40px] tracking-[0px] pt-4">{service?.data?.subCategories?.[0]?.name || 'GreenThumb Gardens'}</h2>
        <div className="flex  items-center  ">
          <MdLocationOn className="text-black-500 w-5 h-5" />
          <p className="text-[24px] text-gray-500">Thiruvananthapuram </p>
          <MdStar className="text-yellow-500 w-5 h-5 ml-6" />
          <p className="text-[24px] text-yellow-500 mt-1"> 4.5 Rating</p>
        </div>
        <div className="w-full  flex">
          <div className="w-[50%] ">
            <h3 className="mt-4 font-medium text-[28px] leading-[40px] tracking-[0px]">About us</h3>
            <p className="font-normal text-[18px] leading-[28px] tracking-[0px] mt-2 pb-8 text-justify">
             {service?.data?.subCategories?.[0]?.description }
            </p>
            <DesktopReview />
          </div>
          <div className="w-[50%] ">
            <div className="w-full h-fit  mx-auto sticky top-20 p-2">
              {showSchedule ? (
                <ScheduleService 
                  selectedPlan={selectedPlan!}
                  subCategoryId={id}
                  onBack={() => setShowSchedule(false)} 
                />
              ) : (
              <>
              <div className="bg-white p-3 rounded-t-3xl w-full h-full pt-6">
                  <p className='text-[16px] font-medium pb-1'>Select plan</p>

                  {packages.length > 0 ? (
                    packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPlan(pkg.id)}
                        className={`w-full mt-3 border rounded-xl p-3 cursor-pointer transition-all duration-300 
                          ${selectedPlan === pkg.id ? "border-purple-500 shadow-md" : "border-gray-200"}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h2 className={`font-medium text-sm ${selectedPlan === pkg.id ? "text-purple-500" : "text-gray-800"}`}>
                            {pkg.tittle}
                          </h2>
                          <span className="text-white text-xs px-2 py-1 rounded-full bg-[#8948F9]">
                            ₹{pkg.offerPrice.inr} / {pkg.durationType}
                          </span>
                        </div>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          {(expandedPackages.has(pkg.id) ? pkg.features : pkg.features.slice(0, 3)).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className={`text-sm ${selectedPlan === pkg.id ? "text-purple-500" : ""}`}>•</span>
                              <span className={selectedPlan === pkg.id ? "text-purple-500" : ""}>
                                {feature}
                              </span>
                            </li>
                          ))}
                          {pkg.features.length > 3 && (
                            <li className="flex justify-start mt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedPackages(prev => {
                                    const newSet = new Set(prev);
                                    if (newSet.has(pkg.id)) {
                                      newSet.delete(pkg.id);
                                    } else {
                                      newSet.add(pkg.id);
                                    }
                                    return newSet;
                                  });
                                }}
                                className={`text-xs pl-2 font-medium underline hover:no-underline transition-all duration-200 ${
                                  selectedPlan === pkg.id ? "text-purple-500 hover:text-purple-600" : "text-gray-500 hover:text-gray-700"
                                }`}
                              >
                                {expandedPackages.has(pkg.id) ? "Show less ↑" : "Show more ↓"}
                              </button>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">Loading plans...</p>
                  )}
                </div>
              <div className="bg-white w-full flex justify-center items-center p-3 rounded-bl-3xl rounded-br-3xl">
                <button
                  disabled={!selectedPlan}
                  onClick={() => {
                    if (selectedPlan) {
                      console.log('Selected Plan ID:', selectedPlan);
                      setShowSchedule(true);
                    }
                  }}
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

export default DeskTop