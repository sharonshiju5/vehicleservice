'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CiShop } from 'react-icons/ci';

type Service = {
    id: number;
    name: string;
    img: string;
};
function Page() {
  const router = useRouter()
  const [active, setActive] = useState("all");
      const categories = [
          { id: "all", label: "All services", icon: <CiShop className="text-lg" /> },
          { id: "cleaning", label: "Cleaning", icon: <CiShop className="text-lg" /> },
          { id: "appliance", label: "Appliance Cleaning", icon: <CiShop className="text-lg" /> },
      ];
  
      // Example services (replace `img` with your given src)
      const services: Service[] = [
          { id: 1, name: "Repair", img: "/assets/logo/seg.png" },
          { id: 2, name: "Plumber", img: "/assets/logo/seg.png" },
          { id: 3, name: "Electrician", img: "/assets/logo/seg.png" },
          { id: 4, name: "Cleaning", img: "/assets/logo/seg.png" },
          { id: 2, name: "Plumber", img: "/assets/logo/seg.png" },
          { id: 3, name: "Electrician", img: "/assets/logo/seg.png" },
          { id: 4, name: "Cleaning", img: "/assets/logo/seg.png" },
          { id: 4, name: "Cleaning", img: "/assets/logo/seg.png" },
      ];

  return (
    <div className='w-full'>
        <div className="w-full bg-white shadow-sm px-4 py-4 flex items-center gap-3 text-center ">
          <button onClick={() => router.back()} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <p className='font-medium text-[16px] leading-[18px] tracking-[-0.36px] text-center'>Categories</p>
        </div>

        <div className="w-full p-4">
                {/* Top Scrollable Tabs */}
                <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActive(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
              ${active === cat.id
                                    ? "border-purple-500 bg-purple-50 text-purple-600"
                                    : "border-gray-200 bg-white text-gray-500"
                                }`}
                        >
                            {cat.icon}
                            <span className="whitespace-nowrap">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow"
                        >
                            <img src={service.img} alt={service.name} className="w-[53px] h-[53px] object-contain mb-2" />
                            <span className="text-gray-500 text-sm font-medium">{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        
    </div>
  )
}

export default Page