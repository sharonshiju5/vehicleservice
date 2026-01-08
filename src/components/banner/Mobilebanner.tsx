import React, { useEffect } from 'react'
import Image from 'next/image'
import { getBanners } from '@/services/commonapi/vehicleserviceApi';
type Banner = {
  id: number;
  img: string;
  link: string;
};
function Mobilebanner() {
    const banners: Banner[] = [
    {
      id: 1,
      img: "/assets/banner/mobbanner.png", // replace with your src
      link: "https://your-link.com",
    },
    {
      id: 2,
      img: "/assets/banner/mobbanner.png", // another example
      link: "https://your-link-2.com",
    },
  ];
  async function GetBannerImages() {
    try {
      const response= await getBanners()
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    GetBannerImages()
  },[] )
  return (
    <div className="w-full overflow-x-auto no-scrollbar px-6 py-4">
          <div className="flex gap-4">
            {banners.map((banner) => (
              <a
                key={banner.id}
                href={banner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[299px] sm:min-w-[299px] md:min-w-[299px] rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={banner.img || "/assets/banner/banner.png"}
                  alt="Cashback Banner"
                  width={299}
                  height={156}
                  className="w-full h-[156px] object-cover"
                />
              </a>
            ))}
          </div>
        </div>
  )
}

export default Mobilebanner
