'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline, IoChevronDown } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'
import { FaWallet, FaMapMarkerAlt, FaGift, FaCreditCard, FaQuestionCircle, FaEdit } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { UserCircle, PackageCheck, ReceiptText, LogOut } from 'lucide-react'
import { getUser } from '@/services/auth/auth'
import DownloadAppModal from '@/components/DownloadAppModal'
import LocationModal from '@/components/desktop/LocationModal'
import { createPortal } from 'react-dom'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from 'next/navigation'

interface User {
  name?: string;
  email?: string;
  // Add other user properties as needed
}

const menuItems = [
  { icon: <FaWallet />, label: "Wallet", path: "https://www.seclob.com/profile/wallet" },
  { icon: <FaMapMarkerAlt />, label: "Manage Address", path: "https://www.seclob.com/manage-address" },
  { icon: <FaGift />, label: "Referral Point", path: "https://www.seclob.com/referral" },
  { icon: <FaCreditCard />, label: "Payment Methods", path: "/payments" },
  { icon: <FaQuestionCircle />, label: "Help & Support", path: "/support" },
]

const options = [
  { title: 'My Account', path: "https://www.seclob.com/edit-profile", icon: <UserCircle className="w-5 h-5 text-white" /> },
  { title: 'Orders', path: "https://www.seclob.com/profile/order/history", icon: <PackageCheck className="w-5 h-5 text-white" /> },
  { title: 'Transaction', path: 'https://www.seclob.com/profile/transaction/history', icon: <ReceiptText className="w-5 h-5 text-white" /> },
]

function DesktopHeader() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [name, setName] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [regionName, setRegionName] = React.useState<string | null>(null);
  const [city, setcity] = React.useState<string | null>(null);
  const [country, setCountry] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const profileDropdownRef = React.useRef<HTMLDivElement>(null);
  const location = useSelector((state: RootState) => state.location);

  React.useEffect(() => {
    setMounted(true);
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedRegionName = localStorage.getItem('regionName');
    const storedcity = localStorage.getItem('city');
    const storedCountry = localStorage.getItem('country');
    setName(storedName);
    setEmail(storedEmail);
    setRegionName(storedRegionName);
    setCountry(storedCountry);
    setcity(storedcity);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document?.querySelector('.header-container')
      if (header) {
        setHeaderHeight((header as HTMLElement)?.offsetHeight)
      }
    }
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef?.current && !profileDropdownRef?.current?.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const router = useRouter()

  const handleUserButtonClick = () => {
    if (name) {
      setIsProfileDropdownOpen(!isProfileDropdownOpen)
    } else {
      // router.push("/login")
      window.location.href = "https://www.seclob.com/login"
    }
  }

  const handleMenuItemClick = (path: string) => {
    router.push(path)
    setIsProfileDropdownOpen(false)
  }

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('refreshtoken')
      localStorage.removeItem('accessToken')
      setName(null)
      setEmail(null)
      setShowLogoutModal(false)
      setIsProfileDropdownOpen(false)
    }, 1500)
  }

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
            <div className="relative" ref={profileDropdownRef}>
              <button 
                className="h-8 bg-[#5818BF] text-white px-2 sm:px-4 rounded-lg flex items-center hover:bg-[#2d0f47]"
                onClick={handleUserButtonClick}
              >
                <FiUser className="text-sm" />
                {!mounted || loading ? (
                  <div className="hidden sm:block w-4 h-4 ml-1 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span className="hidden sm:block text-sm font-medium ml-1">{name || 'Login/Sign Up'}</span>
                )}
              </button>


              
              <div
                className={`fixed right-0 w-[422px] bg-white shadow-2xl border-l z-50 transform transition-all duration-700 ease-out ${
                  isProfileDropdownOpen 
                    ? 'translate-x-0' 
                    : 'translate-x-full pointer-events-none'
                }`}
                style={{ 
                  top: '0px',
                  height: '100vh'
                }}
              >
                {name && (
                  <div className="h-full flex flex-col">
                    <div className="bg-gradient-to-r from-black to-purple-900 text-white p-5 flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-black">
                          <span className="text-base font-bold">👤</span>
                        </div>
                        <div>
                          <div className="font-semibold text-base flex items-center gap-1">
                            {name} 
                            <span className="text-blue-400">
                              <Image className="h-5" src='/assets/auth/verify.webp' alt="" width={20} height={20} />
                            </span>
                          </div>
                          <div className="text-sm text-gray-300 truncate max-w-48">{email}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-3 p-5 bg-gray-50">
                      {options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleMenuItemClick(option.path)}
                          className="flex-1"
                        >
                          <div className="flex flex-col items-center cursor-pointer bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                            <div
                              className="rounded-lg w-full h-16 flex items-center justify-center shadow-sm"
                              style={{
                                background: 'linear-gradient(135deg, #4802B9, #5D11D9, #6315E1, #6A1AEC, #7722FF, #5818BF)',
                              }}
                            >
                              <div className="w-6 h-6">{option.icon}</div>
                            </div>
                            <p className="mt-3 text-sm text-gray-800 text-center font-medium">{option.title}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex-1 py-4 overflow-y-auto scrollbar-hide">
                      {menuItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleMenuItemClick(item.path)}
                          className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-100 transition-colors group"
                        >
                          <div className="flex items-center space-x-5">
                            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg text-lg group-hover:bg-purple-200 transition-colors">
                              {item.icon}
                            </div>
                            <div className="text-[16px] font-medium text-gray-700">{item.label}</div>
                          </div>
                          <IoIosArrowForward className="text-gray-400 text-lg group-hover:text-gray-600 transition-colors" />
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setShowLogoutModal(true)}
                        className="w-full flex items-center justify-between px-6 py-5 hover:bg-red-50 transition-colors group border-t border-gray-200 mt-3"
                      >
                        <div className="flex items-center space-x-5">
                          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-lg group-hover:bg-red-200 transition-colors">
                            <MdLogout />
                          </div>
                          <div className="text-lg font-medium text-red-600">Logout</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
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

      {showLogoutModal && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl w-96 max-w-full p-6 transform transition-all duration-300 scale-100 shadow-2xl">
            <div className="flex justify-center pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <LogOut className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            <div className="text-center pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Confirm Logout</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Are you sure you want to log out from your account?
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleLogout}
                disabled={isLoading}
                className="w-full bg-purple-700 hover:bg-purple-800 disabled:bg-purple-400 text-white font-medium py-3 rounded-xl transition-colors"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Logging out...
                  </span>
                ) : 'Logout'}
              </button>

              <button
                onClick={() => setShowLogoutModal(false)}
                disabled={isLoading}
                className="w-full bg-transparent text-gray-600 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default DesktopHeader