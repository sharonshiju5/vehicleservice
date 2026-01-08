import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
type Contractor = {
  id: number;
  name: string;
  distance: string;
  rating: number;
  experience: string;
  specialist: string;
  img: string;
};
function Popular() {
  const contractors: Contractor[] = [
    {
      id: 1,
      name: "Jhon Doe",
      distance: "2km away",
      rating: 4.8,
      experience: "10 Years",
      specialist: "Ac Mechanic",
      img: "/assets/landing/person.jpg",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      distance: "1.5km away",
      rating: 4.9,
      experience: "8 Years",
      specialist: "Plumber",
      img: "/assets/landing/person.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      distance: "3km away",
      rating: 4.7,
      experience: "12 Years",
      specialist: "Electrician",
      img: "/assets/landing/person.jpg",
    },
    {
      id: 4,
      name: "Lisa Brown",
      distance: "2.5km away",
      rating: 4.8,
      experience: "6 Years",
      specialist: "Painter",
      img: "/assets/landing/person.jpg",
    },
    {
      id: 5,
      name: "David Lee",
      distance: "1km away",
      rating: 4.9,
      experience: "15 Years",
      specialist: "Carpenter",
      img: "/assets/landing/person.jpg",
    },
  ];
  return (
    <div className="w-full pt-2">
          <div className='flex justify-between px-2.5'>
            <h2 className="font-semibold text-[18px] leading-[30px] tracking-[0.01px] mb-4 pl-2">
              Top Rated Providers
            </h2>
            <Link href="/seeall/toprated">
                <p className='font-medium text-[12px] leading-[26px] tracking-[0.01px] text-[#FF5C02]'>See All</p>
            </Link>   
          </div>
          {/* Horizontal scroll container */}
          <div className="flex gap-[10px] overflow-x-auto no-scrollbar scrollbar-hide pb-2 pl-4">
            {contractors.slice(0, 5).map((c) => (
              <div
                key={c.id}
                className="w-[345px] h-[185px] flex-shrink-0 bg-[#FF5C0205]  rounded-2xl p-4 pb-6 shadow-md border border-gray-100 "
              >
                <div className="flex gap-3 mb-4">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={65}
                    height={81}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">{c.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {c.distance}
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded-lg text-sm  flex items-center gap-1">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {c.rating}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-[#FF5C02] text-[12px] font-medium">Experience</p>
                        <p className="text-gray-900 text-[12px] font-semibold">{c.experience}</p>
                      </div>
                      <div>
                        <p className="text-[#FF5C02] text-[12px] font-medium">Specialist</p>
                        <p className="text-gray-900 text-[12px] font-semibold">{c.specialist}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* View button */}
                <button className="w-full py-2 border border-[#FF5C02] text-[#FF5C02] rounded-lg font-medium hover:bg-purple-50 transition-colors">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Popular
