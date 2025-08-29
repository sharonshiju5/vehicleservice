import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

function App() {
    return (
        <div className='w-full bg-white h-screen flex items-center justify-center'>
            <div className="fixed top-0 left-0 w-full h-[500px] bg-[linear-gradient(180deg,#e6d9ff_0%,#ffffff_100%)] z-10">  </div>
            <div className=" w-[90%] bg-white rounded-2xl shadow p-4 relative z-20 ">
      {/* Header */}
      <div className="flex items-center gap-3 z-100 ">
        <img
          src="https://i.pravatar.cc/50" // sample avatar
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Vimal tk</h2>
          <p className="text-sm text-gray-500">Ac Repair</p>
        </div>
        <span className="text-xs bg-green-100 text-green-600 font-medium px-2 py-1 rounded">
          Premium
        </span>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px]">Service name</span>
          <span className="font-medium text-gray-600">Ac service</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px]">Reviews</span>
          <span className="flex items-center gap-1 text-yellow-500">
            <FaStar className="text-yellow-400" /> 4.3
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px] flex items-center gap-1">
             Arrival Time
          </span>
          <span className="font-medium text-gray-600">30mins</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px] flex items-center gap-1">
             Company location
          </span>
          <span className="font-medium text-gray-600">Thrissur</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px] flex items-center gap-1">
             Payment
          </span>
          <span className="font-medium text-gray-600">$3000</span>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
          Reject
        </button>
        <button className="flex-1 py-2 bg-[#1FC16B] text-white rounded-lg hover:bg-green-600">
          Accept
        </button>
      </div>
    </div>
        </div>
    )
}

export default App