import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';
type Service = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  rating: number;
  img: string;
};
function OffersDeals() {
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
     <div className="w-full bg-white">
          <h2 className="font-semibold text-[18px] leading-[30px] tracking-[0.01px] mb-6 pl-2 pt-2">Offers & deals</h2>
    
          {/* Scrollable Cards */}
          <div className="flex gap-6 overflow-x-auto no-scrollbar scrollbar-hide pb-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-[187px] h-[196px] bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
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
                  <div className="  h-[17px] absolute bottom-3 right-3 bg-purple-600 text-white text-sm font-semibold flex items-center gap-1 px-3 py-2 rounded-md">
                    <FaStar className="text-yellow-300" />
                    {service.rating}
                  </div>
                </div>
    
                {/* Details */}
                <div className="py-4 px-2">
                  <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{service.subtitle}</p>
                  <div className="w-full flex justify-between">
                    <span className="text-sm text-gray-500">Starting from</span>
    
                    <span className="text-purple-600 font-semibold text-base">
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



export default OffersDeals
