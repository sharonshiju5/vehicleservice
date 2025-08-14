import Partnersearch from '@/components/partnersearch/Partnersearch'
import Review from '@/components/reviews/Review'
import React, { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Desktop() {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        {
            question: "How do I book a service on Seclob?",
            answer: "Booking is easy! Just select your service category, choose your location, pick a date and time, and confirm the booking — all in just a few taps."
        },
        {
            question: "Are the service professionals verified?",
            answer: "Yes, all our service professionals go through a rigorous verification process including background checks and skill assessments."
        },
        {
            question: "Are the service professionals verified?",
            answer: "Yes, all our service professionals go through a rigorous verification process including background checks and skill assessments."
        },
        {
            question: "Are the service professionals verified?",
            answer: "Yes, all our service professionals go through a rigorous verification process including background checks and skill assessments."
        },
        {
            question: "Are the service professionals verified?",
            answer: "Yes, all our service professionals go through a rigorous verification process including background checks and skill assessments."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="hidden md:block">
           
            <div className="bg-white h-auto w-[100%] mx-auto pb-12">
                <Partnersearch />


                <div className=" py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            {/* Left Side - Grouped Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/partner/grppartner.png"
                                    alt="Delivery professionals and verified team"
                                    className="object-cover rounded-lg shadow-lg w-full max-w-[505px] h-auto"
                                />
                            </div>

                            {/* Right Side - Content */}
                            <div className="flex-1 max-w-lg">
                                <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                                    Why Join Us? – Delivery<br />
                                    Partner Benefits
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        Every Deliveo professional completes a rigorous multi-stage vetting
                                        process after verified.
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        Need home maintenance, repair, or renovation help? Turn your house into
                                        a home with Absolute House Services. We provide exceptional service,
                                        every time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className=" py-16 px-4 ">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            {/* Left Side - Content */}
                            <div className="flex-1 max-w-lg">
                                <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                                    Home Improvement &<br />
                                    Repair Simplified
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        Every Sectolo professional completes a rigorous multi-stage
                                        vetting process after verified.
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        Need home maintenance, repair, or renovation help? Turn your
                                        house into a home with Absolute Home Services. We provide
                                        exceptional service, every time.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side - Service Grid Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/partner/grp2.png"
                                    alt="Home improvement and repair services grid"
                                    className=" object-cover rounded-lg shadow-lg w-full max-w-[633px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="bg-white py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
                                Why Join Us? – Delivery<br />
                                Partner Benefits
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Enjoy Exclusive Perks When You Partner With Us
                            </p>
                        </div>

                        {/* Benefits Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Flexible Work Hours */}
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div
                                        className="bg-purple-600 flex items-center justify-center"
                                        style={{
                                            width: '77px',
                                            height: '77px',
                                            borderTopLeftRadius: '12px',
                                            borderBottomRightRadius: '12px'
                                        }}
                                    >
                                        <img
                                            src="/assets/partner/tick1.png"
                                            alt="Flexible Work Hours"
                                            className="w-12 h-12"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Flexible Work Hours
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Every Sectolo professional completes a rigorous multi-stage vetting process—
                                    police-verified background checks, in-person skill assessments.
                                </p>
                            </div>

                            {/* Dedicated App Access */}
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div
                                        className="bg-purple-600 flex items-center justify-center"
                                        style={{
                                            width: '77px',
                                            height: '77px',
                                            borderTopLeftRadius: '12px',
                                            borderBottomRightRadius: '12px'
                                        }}
                                    >
                                        <img
                                            src="/assets/partner/tick1.png"
                                            alt="Flexible Work Hours"
                                            className="w-12 h-12"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Dedicated App Access
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Every Sectolo professional completes a rigorous multi-stage vetting process—
                                    police-verified background checks, in-person skill assessments.
                                </p>
                            </div>

                            {/* Referral Bonus */}
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div
                                        className="bg-purple-600 flex items-center justify-center"
                                        style={{
                                            width: '77px',
                                            height: '77px',
                                            borderTopLeftRadius: '12px',
                                            borderBottomRightRadius: '12px'
                                        }}
                                    >
                                        <img
                                            src="/assets/partner/tick1.png"
                                            alt="Flexible Work Hours"
                                            className="w-12 h-12"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Referral Bonus
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Every Sectolo professional completes a rigorous multi-stage vetting process—
                                    police-verified background checks, in-person skill assessments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                


                <div className=" py-16 px-4 ">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                             {/* Right Side - Service Grid Image */}
                            <div className="flex-shrink-0 order-2 lg:order-1">
                                <img
                                    src="/assets/partner/grp3.png"
                                    alt="Home improvement and repair services grid"
                                    className=" object-cover rounded-lg shadow-lg w-full max-w-[633px] h-auto"
                                />
                            </div>

                            {/* Left Side - Content */}
                            <div className="flex-1 max-w-lg order-1 lg:order-2">
                                <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                                    Home Improvement &<br />
                                    Repair Simplified
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        Every Sectolo professional completes a rigorous multi-stage
                                        vetting process after verified.
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        Need home maintenance, repair, or renovation help? Turn your
                                        house into a home with Absolute Home Services. We provide
                                        exceptional service, every time.
                                    </p>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>


                <div className="mx-auto w-[90%]">
                    <Review/>
                </div>

                <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Our Most Popular Categories
                            </h2>
                            <p className="text-gray-500 text-base lg:text-lg">
                                Discover the most booked and trusted home services in your area.
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-lg font-medium text-gray-900">
                                            {faq.question}
                                        </span>
                                        <div className="flex-shrink-0 ml-4">
                                            <div className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-45' : ''
                                                }`}>
                                                <svg
                                                    className="w-4 h-4 text-gray-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="px-6 pb-6">
                                            <div className="pt-2 border-t border-gray-100">
                                                <p className="text-gray-600 text-base leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



                <div className="w-[90%] mx-auto">
                    <div className="w-full bg-white pt-16 sm:pt-24 lg:pt-32 pb-4">
                    <div className="w-full min-h-[250px] sm:min-h-[300px] lg:h-[334px] rounded-2xl relative" style={{ backgroundColor: '#782FF8' }}>
                        {/* Content Section */}
                        <div className="flex flex-col lg:flex-row items-center h-full">
                            {/* Left Content */}
                            <div className="flex-1 px-6 sm:px-8 lg:px-12 py-6 lg:py-8">
                                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                    Become a Channel Partner
                                </h1>
                                <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
                                    Join our growing network and unlock new earning opportunities. As a
                                    channel partner, you&apos;ll get exclusive access to our tools, support, and
                                    revenue-sharing programs tailored for your success.
                                </p>
                                <button className="bg-white text-purple-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                                    Join Now
                                </button>
                            </div>

                            {/* Right Image Section */}
                            <div className="flex-1 relative flex items-end justify-center pr-4 sm:pr-6 lg:pr-8 h-full">
                                {/* Delivery person illustration */}
                                <div className="absolute right-4 sm:right-6 lg:right-8">
                                    <img
                                        src="/assets/partner/delivery.png"
                                        alt="Delivery person with scooter"
                                        className="object-contain h-[350px] w-[220px] sm:h-[500px] sm:w-[315px] lg:h-[650px] lg:w-[410px]"
                                        style={{ transform: 'translateY(15px)' }}
                                    />
                                    {/* Fallback placeholder */}
                                    <div className="hidden w-64 h-64 bg-white/20 rounded-lg flex items-center justify-center">
                                        <div className="text-white/60 text-center">
                                            <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-4"></div>
                                            <p className="text-sm">Delivery Person Image</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute top-6 right-20 w-16 h-16 bg-white/5 rounded-full"></div>
                        <div className="absolute bottom-8 right-28 w-12 h-12 bg-white/8 rounded-full"></div>
                        <div className="absolute top-1/3 left-6 w-8 h-8 bg-white/5 rounded-full"></div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Desktop