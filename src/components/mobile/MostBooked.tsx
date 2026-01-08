import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
type Service = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  rating: number;
  img: string;
};
function MostBooked() {
  const services: Service[] = [
    {
      id: 1,
      title: "GreenThumb Gardens",
      subtitle: "Leaky Faucet Repairs",
      price: "$75",
      rating: 4.5,
      img: "/assets/landing/work.jpg",
    },
    {
      id: 2,
      title: "GreenThumb Gardens",
      subtitle: "Leaky Faucet Repairs",
      price: "$75",
      rating: 4.2,
      img: "/assets/landing/work.jpg",
    },
    {
      id: 3,
      title: "GreenThumb Gardens",
      subtitle: "Leaky Faucet Repairs",
      price: "$75",
      rating: 4.2,
      img: "/assets/landing/work.jpg",
    },
  ];

  return (
   <div className="w-full  bg-white">
        <div className='flex justify-between px-2'>
         <h2 className="font-semibold text-[18px] leading-[30px] tracking-[0.01px] mb-6 px-2">Popular Service Near You</h2>
          <Link href="/seeall/popularservice">
              <p className='font-medium text-[12px] leading-[26px] tracking-[0.01px] text-[#FF5C02]'>See All</p>
          </Link>        </div>
         {/* Scrollable Cards */}
         <div className="flex gap-[9px] overflow-x-auto pb-2 pl-4">
           {services.map((service) => (
             <div
               key={service.id}
               className="flex-shrink-0 w-[187px] h-[196px] bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
             >
               {/* Image */}
               <div className="relative">
                 <Image
                   src={service.img}
                   alt={service.title}
                   width={187}
                   height={114}
                   className="w-[187px] h-[114px] object-cover rounded-t-[3px]"
                 />
                 {/* Rating Badge */}
                 <div className="absolute bottom-3 right-3 bg-[#FF5C02] text-white text-xs font-semibold flex items-center gap-1 px-2 py-1 rounded-lg min-w-[35px] h-[17px]">
                   <FaStar className="text-yellow-400 text-[14px]" />
                   {service.rating}
                 </div>
               </div>
   
               {/* Details */}
               <div className="w-[176px] h-[82px] p-3">
                 <h3 className="text-sm font-semibold text-gray-800 mb-1">
                   {service.title}
                 </h3>
                 <p className="text-xs text-gray-500 mb-2">{service.subtitle}</p>
                 <div className="flex justify-between">
                   <span className="text-xs text-gray-500">Starting from</span>
                   <span className="text-[#3D155F] font-semibold text-sm">
                     {service.price}
                   </span>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
  )
}

export default MostBooked
