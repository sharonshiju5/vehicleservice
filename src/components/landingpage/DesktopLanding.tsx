import { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import DesktopSegment from "../segments/DesktopSegment";
import Review from "../reviews/Review";
import RecentlyUsed from "../segments/RecentlyUsed";

const DesktopLanding = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default
    const [scrollPosition, setScrollPosition] = useState(0);

    const reviewData = {
        name: "Rahul K.",
        service: "AC Repair Chennai",
        date: "July 2025",
        rating: 4,
        text: "The electrician was on time, polite, and fixed my wiring issue quickly. Booking through the app was super smooth. Highly recommended!"
    };

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
        <div>
           
            <div className="bg-white h-auto w-[80%] mx-auto">
                {/* Banner*/}
                <Banner />
                {/* Segment */}
                <DesktopSegment />


                {/* Additional Content */}
                <div className="flex items-center w-full h-[644px] ">
                    <div className="flex h-[537px] w-[95%] mx-auto bg-white rounded-[20px] relative ">

                        {/* Left Side: Text */}
                        <div className="flex flex-col justify-center flex-1">
                            <h2 className="text-[42px] font-semibold text-[#1E1E1E] leading-[42px] mb-[16px] absolute top-8">
                                Absolute Home Services: Home <br />
                                Improvements Contractor Serving

                            </h2>
                            <p className="text-[#8B8B8B] text-[18px]  max-w-[600px] absolute top-[140px]">
                                Need home maintenance, repair, or renovation help? Turn your house into a home with
                                Absolute Home Services. We provide exceptional service, every time.
                            </p>

                            {/* Purple Stats Section */}
                            <div className="flex bg-[#7829EF] text-white rounded-[16px] overflow-hidden w-full h-[120px] absolute bottom-0 ">
                                <div className="flex-1 flex flex-col justify-center items-center border-r border-white/30">
                                    <p className="text-[28px] font-bold">400+</p>
                                    <p className="text-[14px] mt-[4px]">Verified Professionals</p>
                                </div>
                                <div className="flex-1 flex flex-col justify-center items-center border-r border-white/30">
                                    <p className="text-[28px] font-bold">20+</p>
                                    <p className="text-[14px] mt-[4px]">Rated by Real Customers</p>
                                </div>
                                <div className="flex-1 flex flex-col justify-center items-center">
                                    <p className="text-[28px] font-bold">100%</p>
                                    <p className="text-[14px] mt-[4px]">00% Service Guarantee</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="flex items-end justify-end flex-1">
                            <img
                                src="/assets/landing/serving.png"  // ← Replace with your actual image path
                                alt="Service People"
                                className="h-[490px] object-contain"
                            />
                        </div>

                    </div>
                </div>



                <div className="mt-2 w-full h-[627px] bg-white rounded-lg p-8">
                    {/* Top section with Explore button */}
                    <div className="mb-8">
                        <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                            Explore
                        </button>
                    </div>

                    {/* Main heading */}
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            Why Thousands Trust Seclob<br />
                            for Their Home
                        </h1>
                        <p className="text-gray-500 mt-4 text-lg">
                            Discover the most booked and trusted home services in your area
                        </p>
                    </div>

                    {/* Three feature cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {/* Card 1 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                <div className="bg-purple-600 flex items-center justify-center" style={{ width: '77px', height: '77px', gap: '10px', transform: 'rotate(0deg)', opacity: 1, padding: '16px', borderTopLeftRadius: '28px', borderBottomRightRadius: '28px' }}>
                                    <img src="/assets/landing/tick.png" alt="Icon" className="w-12 h-12" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Professionals</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every Seclob professional completes a rigorous multi-stage vetting process—police-verified background checks, in-person skill assessments
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                <div className="bg-purple-600 flex items-center justify-center" style={{ width: '77px', height: '77px', gap: '10px', transform: 'rotate(0deg)', opacity: 1, padding: '16px', borderTopLeftRadius: '28px', borderBottomRightRadius: '28px' }}>
                                    <img src="/assets/landing/medal-star.png" alt="Icon" className="w-12 h-12" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Professionals</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every Seclob professional completes a rigorous multi-stage vetting process—police-verified background checks, in-person skill assessments
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                <div className="bg-purple-600 flex items-center justify-center" style={{ width: '77px', height: '77px', gap: '10px', transform: 'rotate(0deg)', opacity: 1, padding: '16px', borderTopLeftRadius: '28px', borderBottomRightRadius: '28px' }}>
                                    <img src="/assets/landing/like.png" alt="Icon" className="w-12 h-12" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Professionals</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every Seclob professional completes a rigorous multi-stage vetting process—police-verified background checks, in-person skill assessments
                            </p>
                        </div>
                    </div>
                </div>




                <div className="w-full h-auto  p-8 relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Top section with Expand button */}
                        <div className="mb-8">
                            <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                                Expand
                            </button>
                        </div>

                        {/* Main heading */}
                        <div className="mb-12">
                            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
                                Home Improvement & Repair<br />
                                Simplified
                            </h1>
                            <p className="text-gray-500 text-lg max-w-md">
                                Every Seclob professional completes a rigorous multi-stage vetting process office-verified
                            </p>
                        </div>

                        {/* Content section with categories and images */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* Left side - Categories list */}
                            <div className="space-y-8">
                                {/* Category 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[80px] h-[75px] bg-[#F9FAFB] rounded-[10px] flex items-center justify-center shadow-sm border border-[#E5E7EB]">
                                        <img src="assets/landing/verify.png" alt="Verify Icon" className="w-[40px] h-[40px]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Most Popular Categories</h3>
                                        <p className="text-gray-500 text-sm">
                                            Every Seclob professional completes a rigorous multi-stage vetting process office-verified
                                        </p>
                                    </div>
                                </div>

                                {/* Category 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[80px] h-[75px] bg-[#F9FAFB] rounded-[10px] flex items-center justify-center shadow-sm border border-[#E5E7EB]">
                                        <img src="assets/landing/verify.png" alt="Verify Icon" className="w-[40px] h-[40px]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Most Popular Categories</h3>
                                        <p className="text-gray-500 text-sm">
                                            Every Seclob professional completes a rigorous multi-stage vetting process office-verified
                                        </p>
                                    </div>
                                </div>

                                {/* Category 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[80px] h-[75px] bg-[#F9FAFB] rounded-[10px] flex items-center justify-center shadow-sm border border-[#E5E7EB]">
                                        <img src="assets/landing/verify.png" alt="Verify Icon" className="w-[40px] h-[40px]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Most Popular Categories</h3>
                                        <p className="text-gray-500 text-sm">
                                            Every Seclob professional completes a rigorous multi-stage vetting process office-verified
                                        </p>
                                    </div>
                                </div>

                                {/* Category 4 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[80px] h-[75px] bg-[#F9FAFB] rounded-[10px] flex items-center justify-center shadow-sm border border-[#E5E7EB]">
                                        <img src="assets/landing/verify.png" alt="Verify Icon" className="w-[40px] h-[40px]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Most Popular Categories</h3>
                                        <p className="text-gray-500 text-sm">
                                            Every Seclob professional completes a rigorous multi-stage vetting process office-verified
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Image collage */}
                            <div className=" h-[600px] absolute right-0 bottom-0 ">
                                <img src="/assets/landing/servicegrp.png" alt="Service professionals" className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>




                <div className="w-full  py-16 px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Our Most Popular Categories
                            </h2>
                            <p className="text-gray-500 text-lg">
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




                <Review/>




                <div className="w-full bg-white pt-32 pb-4">
                    <div className="w-full h-[334px] rounded-2xl relative" style={{ backgroundColor: '#782FF8' }}>
                        {/* Content Section */}
                        <div className="flex items-center h-full">
                            {/* Left Content */}
                            <div className="flex-1 px-12 py-8">
                                <h1 className="text-white text-4xl font-bold mb-4 leading-tight">
                                    Become a Channel Partner
                                </h1>
                                <p className="text-white/90 text-base mb-6 leading-relaxed max-w-lg">
                                    Join our growing network and unlock new earning opportunities. As a
                                    channel partner, you&apos;ll get exclusive access to our tools, support, and
                                    revenue-sharing programs tailored for your success.
                                </p>
                                <button className="bg-white text-purple-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                                    Join Now
                                </button>
                            </div>

                            {/* Right Image Section */}
                            <div className="flex-1 relative flex items-end justify-center pr-8 h-full">
                                {/* Delivery person illustration */}
                                <div className="absolute  right-8">
                                    <img
                                        src="/assets/landing/deliveryman.png"
                                        alt="Delivery person with scooter"
                                        className="object-contain"
                                        style={{ height: '600px', width: '380px', transform: 'translateY(30px)' }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            const nextSibling = target.nextSibling as HTMLElement;
                                            target.style.display = 'none';
                                            if (nextSibling) nextSibling.style.display = 'block';
                                        }}
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



                <div className="w-full h-[639px]  px-8 py-12">
                    {/* Header Section */}
                    <div className="mb-12">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-purple-600 font-medium mb-2">Blog</p>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Most Popular Categories</h1>
                                <p className="text-gray-600 max-w-md">
                                    Every Seclob professional completes a rigorous multi-stage vetting process once-verified
                                </p>
                            </div>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                                View All
                            </button>
                        </div>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="h-48 bg-gray-200 relative">
                                <img
                                    src="/assets/landing/blog1.png" // Replace with your actual image path
                                    alt="Cooking professional"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const nextSibling = target.nextSibling as HTMLElement;
                                        target.style.display = 'none';
                                        if (nextSibling) nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="hidden absolute inset-0 bg-amber-100 flex items-center justify-center">
                                    <div className="text-amber-600 text-center">
                                        <div className="w-12 h-12 bg-amber-200 rounded-full mx-auto mb-2"></div>
                                        <p className="text-sm">Cooking Image</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-purple-600 font-medium text-sm mb-2">Blog</p>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Most Popular Categories</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Every Seclob professional completes a rigorous multi-stage vetting process once-verified
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="h-48 bg-gray-200 relative">
                                <img
                                    src="/assets/landing/blog2.png" // Replace with your actual image path
                                    alt="Cleaning professional"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const nextSibling = target.nextSibling as HTMLElement;
                                        target.style.display = 'none';
                                        if (nextSibling) nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="hidden absolute inset-0 bg-blue-100 flex items-center justify-center">
                                    <div className="text-blue-600 text-center">
                                        <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2"></div>
                                        <p className="text-sm">Cleaning Image</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-purple-600 font-medium text-sm mb-2">Blog</p>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Most Popular Categories</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Every Seclob professional completes a rigorous multi-stage vetting process once-verified
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="h-48 bg-gray-200 relative">
                                <img
                                    src="/assets/landing/blog3.png" // Replace with your actual image path
                                    alt="Home service professional"
                                    className="w-full h-full object-cover"
                                />
                                {/* Fallback placeholder */}
                                <div className="hidden absolute inset-0 bg-green-100 flex items-center justify-center">
                                    <div className="text-green-600 text-center">
                                        <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-2"></div>
                                        <p className="text-sm">Home Service Image</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-purple-600 font-medium text-sm mb-2">Blog</p>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Most Popular Categories</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Every Seclob professional completes a rigorous multi-stage vetting process once-verified
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                 <RecentlyUsed/>
                <h1>Desktop Landing</h1>
            </div>
        </div>
    );
}
export default DesktopLanding;