import Image from 'next/image'
import React, { useState } from 'react'
import Plans from './Plans';
import ScheduleService from './ScheduleService';
import AddressStep from './AddressStep';


type Step = {
    title: string;
    subtitle: string;
};

interface StepIndicatorProps {
    steps: Step[];
    currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex justify-between w-full p-2">
            {steps.map((step, index) => {
                const isActive = index + 1 === currentStep;
                return (
                    <div key={index} className="flex flex-col items-start">
                        <div className="flex items-center gap-1">
                            <span
                                className={`text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-400"
                                    }`}
                            >
                                Step {index + 1}
                            </span>
                            {isActive && (
                                <span className="w-4 h-4 bg-purple-600 rounded-full text-white text-[10px] flex items-center justify-center">
                                    ✓
                                </span>
                            )}
                        </div>
                        <span
                            className={`text-sm ${isActive ? "text-purple-600 font-semibold" : "text-gray-400"
                                }`}
                        >
                            {step.subtitle}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

interface DesktopBookingModalProps {
  subCategoryId?: string;
}

function DesktopBookingModal({ subCategoryId = '' }: DesktopBookingModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [bookingData, setBookingData] = useState<{
        bookingDate: string;
        bookingTime: string;
        description: string;
    } | null>(null);

    const steps = [
        { title: "Step 1", subtitle: "Select Package" },
        { title: "Step 2", subtitle: "Set Date and Time" },
        { title: "Step 3", subtitle: "Add Address" },
    ];

    const handlePlanNext = (planId: string) => {
        setSelectedPlan(planId);
        setCurrentStep(2);
    };

    const handleScheduleNext = (data: { bookingDate: string; bookingTime: string; description: string }) => {
        setBookingData(data);
        setCurrentStep(3);
    };

    const handleScheduleBack = () => {
        setCurrentStep(1);
    };

    const handleAddressBack = () => {
        setCurrentStep(2);
    };

    const handleAddressNext = () => {
        // Handle final booking submission
        console.log('Final booking data:', { selectedPlan, ...bookingData });
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <Plans onNext={handlePlanNext} />;
            case 2:
                return (
                    <ScheduleService 
                        selectedPlan={selectedPlan!}
                        subCategoryId={subCategoryId}
                        onNext={handleScheduleNext}
                        onBack={handleScheduleBack}
                    />
                );
            case 3:
                return (
                    <AddressStep 
                        onNext={handleAddressNext}
                        onBack={handleAddressBack}
                    />
                );
            default:
                return <Plans onNext={handlePlanNext} />;
        }
    };
    return (
        <div className="w-[966px] h-[631px] flex justify-center items-center mx-auto border border-gray-300 rounded-lg shadow-lg bg-white">
            {/* Left Side */}
            <div className="w-[45%] h-full relative">
                <Image
                    src="/assets/booking/book.png"
                    alt="desktop"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Right Side */}
            <div className="w-[55%] h-full">
                <div className="w-full h-[15%]  flex justify-center items-center rounded-t-lg">
                    <StepIndicator steps={steps} currentStep={currentStep} />
                </div>

                <div className="w-full h-[85%]  p-4 flex flex-col">
                    {renderCurrentStep()}
                </div>

            </div>

        </div>
    )
}

export default DesktopBookingModal