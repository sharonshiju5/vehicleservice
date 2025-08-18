import React from 'react'
import { FaHome, FaCalendarAlt, FaUser } from "react-icons/fa"
import { MdApps } from "react-icons/md"

function Mobilefooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[60px] bg-white  flex items-center justify-around">
      {/* Home */}
      <div className="flex flex-col items-center text-purple-600">
        <FaHome size={20} />
        <span className="text-xs mt-1">Home</span>
      </div>

      {/* Services */}
      <div className="flex flex-col items-center text-gray-400">
        <MdApps size={20} />
        <span className="text-xs mt-1">Services</span>
      </div>

      {/* Bookings */}
      <div className="flex flex-col items-center text-gray-400">
        <FaCalendarAlt size={20} />
        <span className="text-xs mt-1">Bookings</span>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-gray-400">
        <FaUser size={20} />
        <span className="text-xs mt-1">Profile</span>
      </div>
    </footer>
  )
}

export default Mobilefooter