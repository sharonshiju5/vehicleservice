import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaHome, FaCalendarAlt, FaUser } from "react-icons/fa"
import { MdApps } from "react-icons/md"
import Image from 'next/image'

function Mobilefooter() {
  const pathname = usePathname()
  
  return (
    <footer className="fixed z-90 bottom-0 border-t border-1 border-gray-400 left-0 w-full h-[60px] bg-white  flex items-center justify-around">
      {/* Home */}
      <Link href="/">
        <div
          className={`flex flex-col items-center ${
            pathname === '/' ? 'text-[#0E5387]' : 'text-gray-400'
          }`}
        >
          <Image
            src={
              pathname === '/'
                ? '/assets/icons/homesel.png'
                : '/assets/icons/home.png'
            }
            alt="Home"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-xs mt-1">Home</span>
        </div>
      </Link>

      {/* Services */}
      <Link href="/services">
      <div className={`flex flex-col items-center ${pathname === '/services' ? 'text-[#0E5387]' : 'text-gray-400'}`}>
        <Image
          src={
            pathname === '/services'
              ? '/assets/icons/servicesel.png'
              : '/assets/icons/service.png'
          }
          alt="Services"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="text-xs mt-1">Services</span>
      </div>
     </Link>
      {/* Bookings */}
      <Link href="/orders">
      <div className={`flex flex-col items-center ${pathname === '/orders' ? 'text-[#0E5387]' : 'text-gray-400'}`}>
        <Image
          src={
            pathname === '/orders'
              ? '/assets/icons/bookingsel.png'
              : '/assets/icons/booking.png'
          }
          alt="Bookings"
          width={20}
          height={20}
          className="w-5 h-5"
        />       
        <span className="text-xs mt-1">Bookings</span>
      </div>
      </Link>
      {/* Profile */}
      <Link href="/profile">
      <div className={`flex flex-col items-center ${pathname === '/profile' ? 'text-[#0E5387]' : 'text-gray-400'}`}>
        <Image
          src={
            pathname === '/profile'
              ? '/assets/icons/usersel.png'
              : '/assets/icons/user.png'
          }
          alt="Profile"
          width={20}
          height={25}
          className="w-5 h-5"
        />
        <span className="text-xs mt-1">Profile</span>
      </div>
      </Link>
    </footer>
  )
}

export default Mobilefooter  