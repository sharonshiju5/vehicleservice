'use client'
import React from 'react'
import { ArrowLeft, User, MapPin, Calendar, Crown, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()

  return (
    <div className='min-h-screen bg-gray-50 p-4'>
      {/* Header */}
      <div className='flex items-center justify-between mb-8'>
        <button onClick={() => router.back()} className='p-2'>
          <ArrowLeft size={24} />
        </button>
        <h1 className='text-orange-500 text-xl font-bold'>7994263529</h1>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <Image
            src='/assets/service/foundm.png'
            alt='Profile'
            width={48}
            height={48}
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className='bg-white rounded-2xl p-4 mb-4 shadow-sm'>
        <div className='space-y-4'>
          <button className='flex items-center justify-between py-3 w-full text-left' onClick={() => router.push('/profile/edit')}>
            <div className='flex items-center space-x-3'>
              <div className='bg-[#EEEEEE66] p-2 rounded-lg'>
                <User size={20} className='text-gray-600' />
              </div>
              <span className='text-gray-800'>Edit Profile</span>
            </div>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
          
          <button className='flex items-center justify-between py-3 w-full text-left' onClick={() => router.push('/profile/address')}>
            <div className='flex items-center space-x-3'>
              <div className='bg-[#EEEEEE66] p-2 rounded-lg'>
                <MapPin size={20} className='text-gray-600' />
              </div>
              <span className='text-gray-800'>Address</span>
            </div>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
          
          <button className='flex items-center justify-between py-3 w-full text-left' onClick={() => router.push('/bookings')}>
            <div className='flex items-center space-x-3'>
              <div className='bg-[#EEEEEE66] p-2 rounded-lg'>
                <Calendar size={20} className='text-gray-600' />
              </div>
              <span className='text-gray-800'>My Bookings</span>
            </div>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
          
          <button className='flex items-center justify-between py-3 w-full text-left' onClick={() => router.push('/premium')}>
            <div className='flex items-center space-x-3'>
              <div className='bg-[#EEEEEE66] p-2 rounded-lg'>
                <Crown size={20} className='text-gray-600' />
              </div>
              <span className='text-gray-800'>Premium</span>
            </div>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
          
          <button className='flex items-center justify-between py-3 w-full text-left' onClick={() => router.push('/help')}>
            <div className='flex items-center space-x-3'>
              <div className='bg-[#EEEEEE66] p-2 rounded-lg'>
                <HelpCircle size={20} className='text-gray-600' />
              </div>
              <span className='text-gray-800'>Help & Support</span>
            </div>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>

      {/* Sign Out Button */}
      <div className='bg-red-50 rounded-2xl px-4 shadow-sm'>
        <button className='flex items-center justify-between py-3 w-full text-left' onClick={() => router.push('/login')}>
          <div className='flex items-center space-x-3'>
            <div className='rounded-lg'>
              <Image src="/assets/icons/logout.png" width={40} height={40} alt='logout' className='text-red-500' />
            </div>
            <span className='text-red-500 font-medium'>Sign Out</span>
          </div>
          <svg className='w-5 h-5 text-red-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default page
