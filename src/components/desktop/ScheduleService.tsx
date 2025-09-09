import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import AddressCard from '../mobile/AddressCard'
import DatePickerCard from '../mobile/DatePickerCard'
import TimePicker from '../mobile/TimePicker'
import IssueDescribe from '../mobile/IssueDescribe'
interface ScheduleServiceProps {
  selectedPlan: string;
  onBack?: () => void;
}

function ScheduleService({ selectedPlan, onBack }: ScheduleServiceProps) {
  const router = useRouter()
  
  console.log('ScheduleService - Selected Plan ID:', selectedPlan);
  
    return (
        <div className="bg-white w-full h-full flex flex-col">
            <div className="flex items-center gap-3 p-3 border-b border-gray-100">
                <button onClick={() => onBack ? onBack() : router.back()} className="p-2 -ml-2">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <p className='font-medium text-[16px] leading-[18px] tracking-[-0.36px]'>Schedule service</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3">
                <div className="space-y-4 pb-20">
                    <AddressCard />
                    <DatePickerCard />
                    <TimePicker />
                    <IssueDescribe />
                </div>
            </div>

            <div className="bg-white border-t border-gray-100 p-3">
                <button
                    onClick={() => router.push('/timecountdown')}
                    className={`w-full h-[42px] text-white rounded-xl font-medium text-sm transition-all duration-300 bg-[#7722FF]`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default ScheduleService