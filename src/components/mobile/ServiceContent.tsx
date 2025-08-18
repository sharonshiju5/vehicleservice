import React from 'react'
import { MdLocationOn, MdStar } from 'react-icons/md'
import MobileReview from '../reviews/MobileReview'
import MostPopularServices from './MostPopularServices'

function ServiceContent() {
  return (
    <div>
      <div className="flex-1 px-4 py-6 bg-white rounded-t-3xl">
        <h2 className="font-[500] text-[16px] leading-[26px] tracking-[0.01px]">GreenThumb Gardens</h2>
        <div className="flex pt-2 items-center ">
          <MdLocationOn className="text-black-500 w-5 h-5" />
          <p className="text-sm text-gray-500">Thiruvananthapuram </p>
          <MdStar className="text-yellow-500 w-5 h-5 ml-6" />
          <p className="text-sm text-yellow-500 mt-1"> 4.5 Rating</p>
        </div>
        <h3 className="mt-4 font-medium text-[16px] leading-[26px] tracking-[0.01px]">About us</h3>
        <p className="font-normal text-[14px] leading-[22px] tracking-[0px] mt-2">
          Sparkling Clean offers top-notch cleaning services tailored to your
          needs. Our standard clean includes dusting, vacuuming, mopping, and
          bathroom sanitization.
        </p>

        <hr className="my-4 border-gray-200 " />
        <MobileReview/>
        <hr className="my-4 border-gray-200 " />
        <MostPopularServices/>
      </div>
    </div>
  )
}

export default ServiceContent