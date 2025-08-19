import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Banner {
  id: number;
  image: string;
  alt: string;
}

const banners: Banner[] = [
  {
    id: 1,
    image:"/assets/banner/serbanner.png", // replace with your banner
    alt: "Zomato Cashback Offer",
  },
  {
    id: 2,
    image: "/assets/banner/serbanner.png",
    alt: "Burger & Cashback",
  },
  {
    id: 3,
    image: "/assets/banner/serbanner.png",
    alt: "Food Cashback Promo",
  },
];
function Servicedeatilbanner() {
    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="mx-auto rounded-xl overflow-hidden " style={{ width: "335px", height: "172px" }}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <Image
              src={banner.image}
              alt={banner.alt}
              width={335}
              height={172}
              className="rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Servicedeatilbanner