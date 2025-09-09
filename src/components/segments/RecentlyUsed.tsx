'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/navigation'

const recentCards = [
  {
    id: 1,
    title: 'Customize your e-card based on Your needs',
    description: 'Design your shoe let it Shine on your foots',
    url: '/user',
    img: '/assets/landing/iPhone 16 Pro mockup natural titanium.png',
  }, 
  {
    id: 2,
    title: 'Customize your e-card based on Your needs',
    description: 'Design your shoe let it Shine on your foots',
    url: '/user',
    img: '/assets/landing/iPhone 16 Pro mockup natural titanium.png',
  },
  {
    id: 3,
    title: 'Customize your e-card based on Your needs',
    description: 'Design your shoe let it Shine on your foots',
    url: '/user',
    img: '/assets/landing/iPhone 16 Pro mockup natural titanium.png',
  },
]

const RecentlyUsed = () => {


  const gradientColors = [
    ['#0073C3', '#00375D'],
    ['#DC2929', '#761616'],
    ['#8D9E2B', '#32380F'],
  ]

  const cardsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }

  return (
    <div className="mx-auto pt-8">
        <p className="font-bold text-xl mb-6">Mostly Recently Used</p>

        <Slider {...cardsettings}>
          {recentCards.map((card, index) => {
            const [color1, color2] =
              gradientColors[index % gradientColors.length]

            return (
              <div key={card.id} className="px-2">
                <div
                  className="rounded-xl p-6 h-[250px] flex items-center justify-between overflow-hidden"
                  style={{
                    background: `linear-gradient(to bottom, ${color1}, ${color2})`,
                  }}
                >
                  <div className="text-white w-1/2">
                    <p className="text-lg font-bold">{card.title}</p>
                    <p className="text-xs mt-2 text-black font-semibold">
                      {card.description}
                    </p>
                    <button
                      // onClick={() => router.push(card.url)}
                      className="mt-3 bg-white text-black font-bold px-5 py-2 rounded-lg text-sm"
                    >
                      Explore
                    </button>
                  </div>

                  <div className="w-1/2 flex justify-end">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={144}
                      height={200}
                      className="w-32 md:w-36 h-auto"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
  )
}

export default React.memo(RecentlyUsed)