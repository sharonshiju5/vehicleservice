import React from 'react'
import Image from 'next/image'
type Service = {
  id: number;
  name: string;
  img: string;
};
function Services() {
    const services: Service[] = [
    {
      id: 1,
      name: "Verified Partners",
      img: "/assets/landing/verified.png", // replace with your src
    },
    {
      id: 2,
      name: "Now or Later",
      img: "/assets/landing/now.png",
    },
    {
      id: 3,
      name: "Trusted Experts",
      img: "/assets/landing/trust.png"
    },
    {
      id: 4,
      name: "Help Desk",
      img: "/assets/landing/help.png",
    },
    {
      id: 5,
      name: "Easy Payments",
      img: "/assets/landing/pay.png",
    },
    {
      id: 6,
      name: "Clear Prices",
      img: "/assets/landing/price.png",
    },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="font-medium text-[16px] leading-[26px] tracking-[0.01px] text-gray-900 mb-6">Why seclob service?</h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 ">
        {services.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-center justify-center  rounded-xl p-2 hover:shadow-md transition"
          >
            <Image
              src={s.img}
              alt={s.name}
              width={77}
              height={77}
              className="object-cover mb-3 "
              style={{ width: '77px', height: '77px' }}
            />
            <p className="text-[12px] leading-[18px] tracking-[0.03px] text-center text-gray-700 text-center">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services