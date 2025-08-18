import React from 'react'
import { FaStar } from 'react-icons/fa';
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
      img: "/assets/landing/booked.png", // replace with your src
    },
    {
      id: 2,
      title: "GreenThumb Gardens",
      subtitle: "Leaky Faucet Repairs",
      price: "$75",
      rating: 4.2,
      img: "/assets/landing/booked.png", // replace with your src
    },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="font-medium text-[16px] leading-[26px] tracking-[0.01px] mb-4">Most booked services</h2>

      {/* Scrollable Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {services.map((service) => (
          <div
            key={service.id}
            className="min-w-[250px] bg-white rounded-xl  overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl"
              />
              {/* Rating Badge */}
              <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold flex items-center gap-1 px-2 py-1 rounded-md">
                <FaStar className="text-yellow-300" />
                {service.rating}
              </div>
            </div>

            {/* Details */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-xs text-gray-500">{service.subtitle}</p>
              <p className="mt-2 text-xs text-gray-500">
                Starting from{" "}
                <span className="text-purple-600 font-medium">{service.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MostBooked