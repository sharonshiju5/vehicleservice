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
      img: "/assets/landing/service1.png",
    },
    {
      id: 2,
      name: "Now or Later",
      img: "/assets/landing/service2.png",
    },
    {
      id: 3,
      name: "Trusted Experts",
      img: "/assets/landing/service3.png"
    },
    {
      id: 4,
      name: "Help Desk",
      img: "/assets/landing/service4.png",
    },
    {
      id: 5,
      name: "Easy Payments",
      img: "/assets/landing/service5.png",
    },
    {
      id: 6,
      name: "Clear Prices",
      img: "/assets/landing/service6.png",
    },
  ];

  return (
    <div className="w-full px-6 py-6">
      <h2 className="font-semibold text-[18px]  leading-[30px] tracking-[0.01px] text-gray-900 mb-8">Why seclob service?</h2>

      <div className="grid grid-cols-2  gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-center shadow-lg justify-center rounded-xl p-4 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={s.img}
              alt={s.name}
              width={94}
              height={94}
              className="object-cover mb-4"
              style={{ width: '94px', height: '94px' }}
            />
            <p className="font-poppins font-semibold text-[16px] leading-[21px] tracking-[0px] text-center">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
