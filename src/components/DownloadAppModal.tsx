'use client'

import { X, Download, Star } from 'lucide-react'
import { FaAndroid, FaApple } from 'react-icons/fa'

interface DownloadAppModalProps {
  onClose: () => void
}

export default function DownloadAppModal({ onClose }: DownloadAppModalProps) {
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.seclob.seclob_reseller_app"
  const appStoreUrl = "https://apps.apple.com/in/app/seclob-reseller/id6746757963"
  
  const handlePlatformSelect = (platform: 'android' | 'ios') => {
    const url = platform === 'android' ? playStoreUrl : appStoreUrl
    window.open(url, '_blank')
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20" onClick={onClose}></div>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden animate-slideIn">
          <div className="flex items-center justify-center p-4 border-b border-gray-200 relative">
            <h2 className="text-lg font-semibold text-gray-900">
              Download The App
            </h2>
            <button
              onClick={onClose}
              className="absolute right-4 p-1 hover:bg-gray-100 border-2 border-black rounded-full transition-colors"
              aria-label="close"
            >
              <X className="w-5 h-5 font-semibold" />
            </button>
          </div>

          <div className="p-6">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Rated 4.8/5 by thousands of users</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handlePlatformSelect('android')}
                className="w-full flex items-center gap-4 p-4 border-2 border-gray-100 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <FaAndroid className="text-2xl text-green-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">Google Play Store</h3>
                  <p className="text-sm text-gray-500">Download for Android devices</p>
                </div>
                <div className="text-gray-400 group-hover:text-green-600 transition-colors">
                  <Download className="w-5 h-5" />
                </div>
              </button>

              <button
                onClick={() => handlePlatformSelect('ios')}
                className="w-full flex items-center gap-4 p-4 border-2 border-gray-100 rounded-2xl hover:border-gray-800 hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FaApple className="text-2xl text-gray-800" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">App Store</h3>
                  <p className="text-sm text-gray-500">Download for iOS devices</p>
                </div>
                <div className="text-gray-400 group-hover:text-gray-800 transition-colors">
                  <Download className="w-5 h-5" />
                </div>
              </button>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold text-purple-700">Pro tip:</span> Enable notifications to get the latest updates and exclusive offers!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  )
}