import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaHome, FaCalendarAlt, FaUser } from "react-icons/fa"
import { MdApps } from "react-icons/md"

function Mobilefooter() {
  const pathname = usePathname()
  
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[60px] bg-white  flex items-center justify-around">
      {/* Home */}
       <Link href="https://www.seclob.com/">
      <div className="flex flex-col items-center text-gray-400">
        <FaHome size={20} />
        <span className="text-xs mt-1">Home</span>
      </div>
     </Link>
      {/* Services */}
      <Link href="/">
      <div className={`flex flex-col items-center ${pathname === '/' ? 'text-purple-600' : 'text-gray-400'}`}>
        <MdApps size={20} />
        <span className="text-xs mt-1">Services</span>
      </div>
     </Link>
      {/* Bookings */}
      <Link href="/orders">
      <div className={`flex flex-col items-center ${pathname === '/orders' ? 'text-purple-600' : 'text-gray-400'}`}>
        <FaCalendarAlt size={20} />
        <span className="text-xs mt-1">Bookings</span>
      </div>
      </Link>
      {/* Profile */}
      <Link href="https://www.seclob.com/profile">
      <div className="flex flex-col items-center text-gray-400">
        <FaUser size={20} />
        <span className="text-xs mt-1">Profile</span>
      </div>
      </Link>
    </footer>
  )
}

export default Mobilefooter  