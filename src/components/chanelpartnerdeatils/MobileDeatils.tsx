import React, { useState, useEffect } from 'react'

interface DeaktopDeatilsProps {
    isOpen: boolean
    onClose: () => void
    data: {
        partner?: {name?: string}
        request?: {rating?: number; reviews?: number; location?: string; experience?: string; jobDescription?: string; basicPay?: string; addOnPay?: string; hourlyPay?: string} | null
    }
}

function MobileDeatils({ isOpen, onClose, data }: DeaktopDeatilsProps) {
    const [activeTab, setActiveTab] = useState('details')
    const [isAnimating, setIsAnimating] = useState(false)
    
    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true)
        }
    }, [isOpen])
    
    const handleClose = () => {
        setIsAnimating(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }
    
    if (!isOpen) return null

    return (
        <div 
            className={`fixed inset-0 bg-black/40 flex items-end z-50 transition-opacity duration-300 ${
                isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleClose}
        >
            <div 
                className={`w-full h-auto pb-4 bg-white rounded-t-2xl p-6 relative shadow-lg transform transition-transform duration-300 ease-out ${
                    isAnimating ? 'translate-y-0' : 'translate-y-full'
                }`}
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-medium text-base leading-[26px] tracking-[0.01px] text-gray-900">
                        Provider details
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="text-sm text-blue-600 hover:underline">Need help ?</button>
                        <button
                            onClick={handleClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                </div>
                <hr className="border-gray-200 mb-4" />

                {/* Tabs */}
                <div className="flex items-center border-b border-gray-200 mb-4">
                    <button 
                        onClick={() => setActiveTab('details')}
                        className={`text-sm font-medium pb-2 px-4 ${
                            activeTab === 'details' 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Service provider details
                    </button>
                    <button 
                        onClick={() => setActiveTab('reviews')}
                        className={`text-sm font-medium pb-2 px-4 ${
                            activeTab === 'reviews' 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Reviews
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'details' ? (
                    <>
                        {/* Provider info card */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src="https://i.pravatar.cc/50?img=12"
                            alt="Provider"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-base font-semibold text-gray-900">Vimal tk</h3>
                            <span className="inline-block text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                                Premium
                            </span>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 text-sm">
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Service name</span>
                            <span className="text-gray-900">Ac service</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Location</span>
                            <span className="text-gray-900">kozhikode cyberpark</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Reviews</span>
                            <span className="text-gray-900">3.6 / 47467 reviews</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Experience</span>
                            <span className="text-gray-900">2-3 years</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Basic pay</span>
                            <span className="text-gray-900">$5456</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Add on charge</span>
                            <span className="text-gray-900">$5456</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Hourly charge</span>
                            <span className="text-gray-900">$3000</span>
                        </div>
                    </div>
                </div>

                        {/* Job Description */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-gray-500">📄</span>
                                <span className="font-medium text-gray-800">Job Description</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-6">
                                Absolutely thrilled with the service! My apartment has never looked better.
                                The team was punctual, professional, and incredibly thorough. Highly recommend!
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src="https://i.pravatar.cc/40?img=5"
                                    alt="Reviewer"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★★★★★</span>
                                        <span className="text-sm text-gray-500">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">
                                Excellent service! Very professional and thorough. Highly recommend.
                            </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src="https://i.pravatar.cc/40?img=8"
                                    alt="Reviewer"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-medium text-gray-900">Mike Chen</h4>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★★★★☆</span>
                                        <span className="text-sm text-gray-500">4.0</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">
                                Good work, arrived on time and completed the job efficiently.
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default MobileDeatils