import Link from 'next/link';
import React, { useState } from 'react'
import { CiShop } from "react-icons/ci";

type Service = {
    id: number;
    name: string;
    img: string;
};
function MobileSegment() {
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
        { id: 5, name: "Plumber", img: "/assets/logo/seg.png" },
        { id: 6, name: "Electrician", img: "/assets/logo/seg.png" },
        { id: 7, name: "Cleaning", img: "/assets/logo/seg.png" },
        { id: 8, name: "Cleaning", img: "/assets/logo/seg.png" },
    ];

    return (
        <div className='mt-2 w-full'>
            <div className="w-[90%] relative flex mx-auto items-center justify-between py-2">
                <p className='font-medium text-[16px] leading-[26px] tracking-[0.01px]'>
                    Categories
                </p>
                <Link href="/seeall">
                    <p className='font-medium text-[12px] leading-[26px] tracking-[0.01px] text-[#782FF8]'>See All</p>
                </Link>
            </div>
            <div className="w-full p-2">
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
                        <Link key={service.id} href="/servicedeatils">
                            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow">
                                <img src={service.img} alt={service.name} className="w-[53px] h-[53px] object-contain mb-2" />
                                <span className="text-gray-500 text-sm font-medium">{service.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileSegment