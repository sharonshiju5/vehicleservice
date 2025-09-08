import React from 'react'

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
    <div className="flex w-[581px] h-[181px] items-center gap-6 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
      <img
        src={imgSrc}
        alt={title}
        className="w-26 h-26 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <p className="font-normal text-[18px] leading-[28px] tracking-[0px] text-gray-500">{title}</p>
        <h3 className="font-normal text-[20px] leading-[28px] tracking-[0px]">{provider}</h3>
        <p className=" font-normal text-[18px] leading-[28px] tracking-[0px] text-gray-600">
          {rating} ★ · {reviews} reviews · Starting from {price}
        </p>
      </div>
    </div>
  );
};

function MostPopular() {
  return (
    <div className=" mx-auto bg-gray-50  rounded-lg">
      <h2 className="font-medium text-[28px] leading-[40px] tracking-[0px] mb-6">
        Most Popular Services
      </h2>
      {/* 2-column grid like your screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
  )
}

export default MostPopular
