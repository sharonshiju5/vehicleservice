'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline, IoChevronDown } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
import { getUser } from '@/services/auth/auth'
import DownloadAppModal from '@/components/DownloadAppModal'
import { createPortal } from 'react-dom'

interface User {
  name?: string;
  // Add other user properties as needed
}

function DesktopHeader() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const refreshToken = "c3e45f2ccd4a831984750781215641b5eb6ffab6f18bdef65e1f88300d959fd6dd1f7c65193145fc"
  
  const HandleUserget = async () => {
    try {
      const data = await getUser({refreshToken});
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      console.log("User data fetched successfully:", data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    HandleUserget();
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/30 shadow-md header-container">
      <div className="mx-auto max-w-screen-xl">
        <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-20">
          {/* Left Logo Section */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/assets/logo/Layer_1 (7).png"
              className="h-6 w-6 sm:h-8 sm:w-8"
              alt="Seclob"
              width={32}
              height={32}
            />
            <span className="text-base sm:text-lg font-bold text-[#3D155F]">seclob</span>
          </Link>

          {/* Right Side Elements */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/service" className="hidden md:block text-black font-medium hover:text-gray-600">Services</Link>
            <Link href="/channelpartner" className="hidden md:block text-black font-medium hover:text-gray-600">Partner</Link>
            <button className="hidden lg:flex h-10 bg-white/40 backdrop-blur-md border border-white/30 rounded-lg px-4 items-center hover:bg-white/60">
              <IoLocationOutline className="text-gray-600 text-sm" />
              <span className="text-gray-700 text-sm">Bangalore, MG Road…</span>
              <IoChevronDown className="text-gray-600 text-xs" />
            </button>
            <button className="h-8 sm:h-10 bg-[#3D155F] text-white px-2 sm:px-4 rounded-lg flex items-center hover:bg-[#2d0f47]">
              <FiUser className="text-sm" />
              {loading ? (
                <div className="hidden sm:block w-4 h-4 ml-1 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="hidden sm:block text-sm font-medium ml-1">{user?.name || 'Login/Sign Up'}</span>
              )}
            </button>
            <button 
              onClick={() => setShowModal(true)}
              className="hidden sm:flex h-10 bg-yellow-400 text-white px-4 rounded-lg hover:bg-yellow-500 items-center justify-center"
            >
              <span className="text-sm font-medium">Download App</span>
            </button>
            {showModal && typeof window !== 'undefined' && createPortal(
              <DownloadAppModal onClose={() => setShowModal(false)} />,
              document.body
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader