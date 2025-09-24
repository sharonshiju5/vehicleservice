import React, { useEffect, useState } from 'react'
import { CheckCircle2 } from "lucide-react";
import { getPackages, getUserCurrentPackage } from '@/services/commonapi/commonApi';

type PackageType = {
    id: string;
    tittle: string;
    description: string;
    durationType: string;
    features: string[];
    amount: { inr: number; usd: number };
    offerPrice: { inr: number; usd: number };
    gst: { inr: number; usd: number };
    percentage: { inr: number; usd: number };
    type: string;
    priority: number;
};

function FreePlanTag({ price, month, priority }: { price: number; month: string; priority: number }) {
    const getTagColor = () => {
        switch (priority) {
            case 1: return 'bg-yellow-500 hover:bg-yellow-600 shadow-yellow-200/50 hover:shadow-yellow-200/60';
            case 2: return 'bg-green-600 hover:bg-green-700 shadow-green-200/50 hover:shadow-green-200/60';
            case 3: return 'bg-green-600 hover:bg-green-700 shadow-green-200/50 hover:shadow-green-200/60';
            default: return 'bg-green-600 hover:bg-green-700 shadow-green-200/50 hover:shadow-green-200/60';
        }
    };

    return (
        <div className="inline-block">
            <button
                className={`
          relative
          ${getTagColor()}
          text-white 
          font-medium 
          text-xs
          py-1 
          px-3 
          pl-4
          rounded-r-lg 
          shadow-md 
          transition-all 
          duration-200 
          hover:shadow-lg 
          active:scale-95
          overflow-hidden
        `}
                style={{
                    clipPath: 'polygon(8px 0%, 100% 0%, 100% 100%, 8px 100%, 0% 50%)'
                }}
            >
                ₹ {price} / {month}
            </button>
        </div>
    );
}
interface PlansProps {
    onNext: (selectedPlan: string) => void;
}

function Plans({ onNext }: PlansProps) {
    const [packages, setPackages] = useState<PackageType[]>([])
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
    const [currentplan, setCurrentplan] = useState<string | null>(null)

    const truncateText = (text: string[], maxWords: number = 16) => {
        const joinedText = text.join(' ');
        const words = joinedText.split(' ');
        if (words.length <= maxWords) return joinedText;
        return words.slice(0, maxWords).join(' ') + '...';
    };

    const getGradientBg = (priority: number) => {
        switch (priority) {
            case 1: return 'bg-[linear-gradient(89.88deg,#FFE141_0.1%,#FFFFFF_10.59%)]';
            case 2: return 'bg-[linear-gradient(89.9deg,#00B4EF_0.09%,#FFFFFF_11.91%)]';
            case 3: return 'bg-[linear-gradient(89.88deg,#FF5C02_0.1%,#FFFFFF_10.59%)]';
            default: return 'bg-[linear-gradient(89.9deg,#00B4EF_0.09%,#FFFFFF_11.91%)]';
        }
    };

    const getBorderColor = (priority: number) => {
        switch (priority) {
            case 1: return 'border-[#FFE141]';
            case 2: return 'border-[#00B4EF]';
            case 3: return 'border-[#FF5C02]';
            default: return 'border-[#00B4EF]';
        }
    };

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await getPackages();
                if (res?.success && res?.data?.packages) {
                    setPackages(res.data.packages);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };
        fetchPackages();
    }, []);

    useEffect(() => {
        const fetchCurrentPackages = async () => {
            try {
                const res = await getUserCurrentPackage();
                if (res?.success ) {
                    setCurrentplan(res.data.id);
                    setSelectedPlan(res.data.id);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };
        fetchCurrentPackages();
    }, []);

    return (
        <>
            <h1 className='font-medium text-[16px] leading-[26px] tracking-[0.01px] pt-2'>Select Plan</h1>
            {packages.length > 0 ? (
                packages.map((pkg) => (
                    <div key={pkg.id}>


                        <div
                            onClick={() => setSelectedPlan(pkg.id)}
                            className={`w-full mt-4 h-[120px] ${getGradientBg(pkg.priority)} rounded-lg relative flex items-center cursor-pointer transition-all duration-300
                            ${selectedPlan === pkg.id ? 'shadow-lg transform scale-[1.02]' : 'hover:shadow-md'} `}
                        >
                            {/* Inner white card with border */}
                            <div className={`w-[92%] h-full border-2 ${getBorderColor(pkg.priority)} rounded-lg absolute right-0 bg-white flex items-center px-6 transition-all duration-300 ${selectedPlan === pkg.id ? 'border-opacity-100' : 'border-opacity-60'}`}>
                                <div className="flex w-full justify-between items-center">
                                    {/* Left Content */}
                                    <div>
                                        <h3 className="text-[18px] font-semibold text-gray-900">{pkg.tittle}</h3>
                                        <p className="text-gray-500 text-sm leading-5">
                                            {truncateText(pkg.features)}
                                        </p>
                                    </div>

                                    {/* Right Badge */}
                                    <div className="text-white text-xs font-medium absolute top-4 right-4">
                                        <FreePlanTag price={pkg.offerPrice.inr} month={pkg.durationType} priority={pkg.priority} />
                                    </div>
                                </div>
                            </div>

                            {/* Tick Icon (on gradient left) */}
                            {selectedPlan === pkg.id && (
                                <div className="absolute left-2 top-2 ">
                                    <CheckCircle2 className="w-6 h-6 text-purple-800" />
                                </div>
                            )}
                            {/* Purchased Tag (if this is current plan) */}
                            {currentplan === pkg.id && (
                                <div className="absolute bottom-2 right-4 text-xs font-semibold text-green-600">
                                    Purchased
                                </div>
                            )}
                        </div>
                    </div>))
            ) : (
                <p className="text-gray-400 text-sm">Loading plans...</p>
            )}
            <button
                onClick={() => {
                    if (selectedPlan) {
                        const selectedPackage = packages.find(pkg => pkg.id === selectedPlan);
                        if (selectedPackage) {
                            localStorage.setItem('PlanPriority', selectedPackage.priority.toString());
                        }
                        onNext(selectedPlan);
                    }
                }}
                disabled={!selectedPlan}
                className={`w-[100%] mt-8 h-[42px] p-2 text-white rounded-xl font-medium text-sm transition-all duration-300 ${selectedPlan ? 'bg-[#7722FF] hover:bg-[#6611EE]' : 'bg-gray-300 cursor-not-allowed'
                    }`}
            >
                Next
            </button>
        </>
    )
}

export default Plans