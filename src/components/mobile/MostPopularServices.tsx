import React from "react";

type ServiceCardProps = {
  imgSrc: string;
  title: string;
  provider: string;
  rating: number;
  reviews: number;
  price: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  title,
  provider,
  rating,
  reviews,
  price,
}) => {
  return (
    <div className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-b-0">
      <img
        src={imgSrc}
        alt={title}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <p className="font-normal text-[14px] leading-[22px] tracking-[0px] text-gray-500">{title}</p>
        <h3 className="font-medium text-[16px] leading-[26px] tracking-[0.01px]">{provider}</h3>
        <p className="text-sm text-gray-600">
          {rating} ★ · {reviews} reviews · Starting from {price}
        </p>
      </div>
    </div>
  );
};

const MostPopularServices: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white  ">
      <h2 className="font-medium text-[16px] leading-[26px] tracking-[0.01px] mb-4 pb-2">Most Popular Services</h2>
      <div className="flex flex-col gap-4 ">
        <ServiceCard
          imgSrc="assets/landing/popular.png"
          title="Lawn Mowing"
          provider="GreenThumb Gardens"
          rating={4.7}
          reviews={95}
          price="$60"
        />
        <ServiceCard
          imgSrc="assets/landing/popular.png"
          title="Lawn Mowing"
          provider="GreenThumb Gardens"
          rating={4.7}
          reviews={95}
          price="$60"
        />
        <ServiceCard
          imgSrc="assets/landing/popular.png"
          title="Lawn Mowing"
          provider="GreenThumb Gardens"
          rating={4.7}
          reviews={95}
          price="$60"
        />
      </div>
    </div>
  );
};

export default MostPopularServices;
