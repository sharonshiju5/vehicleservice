import React, { useEffect, useState } from 'react'

function Review() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => {
                setScrollPosition(prev => (prev + 1) % 600); // Adjust speed and range as needed
            }, 50); // Adjust speed (lower = faster)
    
            return () => clearInterval(interval);
        }, []);
    
        const ReviewCard = ({ profilePic = "" }) => (
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 w-full max-w-sm relative overflow-hidden">
                <div className="flex items-start mb-4">
                    <img
                        src={profilePic || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e5e7eb'/%3E%3Cpath d='M20 20c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm0 2c-4 0-12 2-12 6v2h24v-2c0-4-8-6-12-6z' fill='%23999'/%3E%3C/svg%3E"}
                        alt={reviewData.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-base mb-1">{reviewData.name}</h3>
                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < reviewData.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <div className="text-sm text-gray-500 mb-3">
                            {reviewData.service} · {reviewData.date}
                        </div>
                        <p className="text-gray-700 text-sm leading-5 line-clamp-4">
                            {reviewData.text}
                        </p>
                    </div>
                </div>
                {/* Bottom blur overlay with erased edge */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"
                    style={{
                        clipPath: 'polygon(0% 100%, 0% 60%, 8% 45%, 15% 55%, 25% 40%, 35% 50%, 45% 35%, 55% 45%, 65% 30%, 75% 40%, 85% 25%, 95% 35%, 100% 20%, 100% 100%)'
                    }}
                ></div>
            </div>
        );

    const reviewData = {
        name: "Rahul K.",
        service: "AC Repair Chennai",
        date: "July 2025",
        rating: 4,
        text: "The electrician was on time, polite, and fixed my wiring issue quickly. Booking through the app was super smooth. Highly recommended!"
    };
  return (
    <div className="w-full min-h-[400px] md:h-[600px] lg:h-[1220px]">
                    <div className="bg-white w-full h-full relative overflow-hidden">
                        {/* Header */}
                        <div className="text-center pt-12 pb-8 px-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Our reviews</h2>
                            <p className="text-gray-600 text-base lg:text-lg">Discover the most booked and trusted home services in your area.</p>
                        </div>

                        {/* Scrolling Reviews Container */}
                        <div className="relative h-full overflow-hidden">
                            <div
                                className="flex flex-col absolute w-full transition-transform duration-75 ease-linear"
                                style={{
                                    transform: `translateY(-${scrollPosition}px)`,
                                    height: 'calc(200% + 600px)' // Extra height for seamless loop
                                }}
                            >
                                {/* First set of reviews - Shuffled alignment */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-0"><ReviewCard profilePic="" /></div>
                                    <div className="mt-4 sm:mt-8"><ReviewCard profilePic="" /></div>
                                    <div className="mt-2 sm:mt-4"><ReviewCard profilePic="" /></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-3 sm:mt-6"><ReviewCard profilePic="" /></div>
                                    <div className="mt-1 sm:mt-2"><ReviewCard profilePic="" /></div>
                                    <div className="mt-5 sm:mt-10"><ReviewCard profilePic="" /></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-2 sm:mt-4"><ReviewCard profilePic="" /></div>
                                    <div className="mt-0"><ReviewCard profilePic="" /></div>
                                    <div className="mt-4 sm:mt-8"><ReviewCard profilePic="" /></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-4 sm:mt-8"><ReviewCard profilePic="" /></div>
                                    <div className="mt-3 sm:mt-6"><ReviewCard profilePic="" /></div>
                                    <div className="mt-1 sm:mt-2"><ReviewCard profilePic="" /></div>
                                </div>

                                {/* Duplicate set for seamless loop - Shuffled alignment */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-0"><ReviewCard profilePic="" /></div>
                                    <div className="mt-4 sm:mt-8"><ReviewCard profilePic="" /></div>
                                    <div className="mt-2 sm:mt-4"><ReviewCard profilePic="" /></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-3 sm:mt-6"><ReviewCard profilePic="" /></div>
                                    <div className="mt-1 sm:mt-2"><ReviewCard profilePic="" /></div>
                                    <div className="mt-5 sm:mt-10"><ReviewCard profilePic="" /></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-2 sm:mt-4"><ReviewCard profilePic="" /></div>
                                    <div className="mt-0"><ReviewCard profilePic="" /></div>
                                    <div className="mt-4 sm:mt-8"><ReviewCard profilePic="" /></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
                                    <div className="mt-4 sm:mt-8"><ReviewCard profilePic="" /></div>
                                    <div className="mt-3 sm:mt-6"><ReviewCard profilePic="" /></div>
                                    <div className="mt-1 sm:mt-2"><ReviewCard profilePic="" /></div>
                                </div>
                            </div>

                            {/* Bottom blur overlay on container */}
                            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white-50 via-white-50/60 via-white-50/25 to-white-50/5 backdrop-blur-sm pointer-events-none z-10"></div>
                        </div>
                    </div>
                </div>
  )
}

export default Review