import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Slider from "react-slick";
import { MdLocationOn, MdStar } from 'react-icons/md';
import DesktopReview from '@/components/reviews/DesktopReview';
import MostPopular from '@/components/desktop/MostPopular';
import Faq from '@/components/desktop/Faq';
import ScheduleService from '@/components/desktop/ScheduleService';

import { getPackages, serviceDeatil } from '@/services/commonapi/commonApi';
import { useParams } from "next/navigation";
import DesktopBookingModal from '@/components/bookingmodal/DesktopBookingModal';

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
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [service, setService] = useState<ServiceType | null>(null)

  const params = useParams();
  const uniqueId = params.subcategoryId;


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


  const handleGetDetails = async () => {
    try {
      if (typeof uniqueId === 'string') {
        const res = await serviceDeatil(uniqueId);
        console.log("Service Details:", res);
        if (res?.success) {
          setService(res)
        }
      }
    } catch (error) {
      console.error("Error fetching package details:", error);
    }
  }
  useEffect(() => {
    handleGetDetails()
  }, [uniqueId])

  useEffect(() => {
    if (service) {
      console.log("Service state updated:", service);
      console.log("Service name:", service.data.subCategories[0].name);
    }
  }, [service])

  return (
    <>
      {showBookingModal && (
        <div
          className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setShowBookingModal(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <DesktopBookingModal
              subCategoryId={id}
            />
          </div>
          <button
            onClick={() => setShowBookingModal(false)}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          >
            ×
          </button>
        </div>
      )}
      <div className='w-full mt-2'>
        <div className="w-[80%]  mx-auto pt-12 ">
         <h2 className="font-medium text-[28px] leading-[40px] tracking-[0px] ">{service?.data?.subCategories?.[0]?.name || 'GreenThumb Gardens'}</h2>
          <div className="flex  items-center pb-2 ">
            <MdLocationOn className="text-black-500 w-5 h-5" />
            <p className="text-[24px] text-gray-500">Thiruvananthapuram </p>
            <MdStar className="text-yellow-500 w-5 h-5 ml-6" />
            <p className="text-[24px] text-yellow-500 mt-1"> 4.5 Rating</p>
          </div>
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

          
          <div className="w-full  flex">
            <div className="w-[50%] ">
              <h3 className="mt-4 font-medium text-[28px] leading-[40px] tracking-[0px]">About us</h3>
              <p className="font-normal text-[18px] leading-[28px] tracking-[0px] mt-2 pb-8 text-justify">
                {service?.data?.subCategories?.[0]?.description}
              </p>

            </div>
            <div className="w-[50%] pt-12">
              <div className="w-[90%] h-fit  mx-auto sticky top-20 p-2 bg-white rounded-2xl shadow-lg ">
                <h1 className='font-medium text-[18px] leading-[28px] pl-2 tracking-[0px] text-center"'>{service?.data?.subCategories?.[0]?.name || 'GreenThumb Gardens'}</h1>
                <div className="bg-white rounded-3xl w-full h-full pt-6">
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={() => setShowBookingModal(true)}
                      className="w-full h-[42px] bg-[#7722FF] text-white rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#6611EE]"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DesktopReview />
          <hr className="my-4 border-gray-200 " />
          <MostPopular />
          {/* Banner Slider */}
          <div className="w-full h-[350px]  rounded-xl overflow-hidden mt-8">
            <Slider {...settings}>
              {banners.map((banner) => (
                <div key={banner.id} className="w-full">
                  <Image
                    src={banner.src || "/assets/banner/banner.png"}
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
    </>
  )
}

export default DeskTop