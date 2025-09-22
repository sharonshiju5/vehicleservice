'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline, IoChevronDown } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
import { getUser } from '@/services/auth/auth'
import DownloadAppModal from '@/components/DownloadAppModal'
import LocationModal from '@/components/desktop/LocationModal'
import { createPortal } from 'react-dom'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from 'next/navigation'

interface User {
  name?: string;
  // Add other user properties as needed
}

function DesktopHeader() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [name, setName] = React.useState<string | null>(null);
  const [regionName, setRegionName] = React.useState<string | null>(null);
  const [city, setcity] = React.useState<string | null>(null);
  const [country, setCountry] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = React.useState(false);
  const location = useSelector((state: RootState) => state.location);

  React.useEffect(() => {
    setMounted(true);
    const storedName = localStorage.getItem('name');
    const storedRegionName = localStorage.getItem('regionName');
    const storedcity = localStorage.getItem('city');
    const storedCountry = localStorage.getItem('country');
    setName(storedName);
    setRegionName(storedRegionName);
    setCountry(storedCountry);
    setcity(storedcity);
    setLoading(false);

    // Close popup when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (showLogoutPopup) {
        setShowLogoutPopup(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showLogoutPopup]);
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/30 shadow-md header-container">
      <div className="mx-auto max-w-screen-xl">
        <div className="py-4 flex items-center justify-between px-2 sm:px-6 lg:px-20">
          {/* Left Logo Section */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/assets/logo/Layer_1 (7).png"
              className="h-9 w-9"
              alt="Seclob"
              width={36}
              height={36}
            />
            <span className="text-xl font-bold text-[#3D155F]">Seclob</span>
          </Link>

          {/* Right Side Elements */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/service" className="hidden md:block text-black font-medium hover:text-gray-600">Services</Link>
            <Link href="/channelpartner" className="hidden md:block text-black font-medium hover:text-gray-600">Partner</Link>
            <LocationModal 
              selectedLocation={city || regionName || country
                ? `${city ?? regionName}, ${country ?? ""}`
                : "choose location"}
              onLocationSelect={(location) => {
                setcity(location.name)
                setCountry(location.country || '')
                if (typeof window !== 'undefined') {
                  localStorage.setItem('city', location.name)
                  localStorage.setItem('country', location.country || '')
                }
              }}
            />
            <div className="relative">
              <button className="h-8 bg-[#5818BF] text-white px-2 sm:px-4 rounded-lg flex items-center hover:bg-[#2d0f47]"
               onClick={() => name ? setShowLogoutPopup(!showLogoutPopup) : router.push('/login')}>
                <FiUser className="text-sm" />
                {!mounted || loading ? (
                  <div className="hidden sm:block w-4 h-4 ml-1 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span className="hidden sm:block text-sm font-medium ml-1">{name || 'Login/Sign Up'}</span>
                )}
              </button>
              {showLogoutPopup && name && (
                <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50">
                  <button
                    onClick={() => {
                      localStorage.removeItem('name')
                      localStorage.removeItem('refreshtoken')
                      setName(null)
                      setShowLogoutPopup(false)
                    }}
                    className="text-red-600 hover:bg-red-50 px-3 py-1 rounded text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="hidden sm:flex h-8 bg-yellow-400 text-white px-4 rounded-lg hover:bg-yellow-500 items-center justify-center"
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