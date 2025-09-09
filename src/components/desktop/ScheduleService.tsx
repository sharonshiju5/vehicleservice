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
    return (
        <div className="bg-white p-3 rounded-3xl w-full h-full">
            <div className="flex items-center gap-3 mb-4">
                <button onClick={() => onBack ? onBack() : router.back()} className="p-2 -ml-2">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <p className='font-medium text-[16px] leading-[18px] tracking-[-0.36px]'>Schedule service</p>
            </div>
            
            <div className="space-y-4">
                <AddressCard />
                <DatePickerCard />
                <TimePicker />
                <IssueDescribe />
            </div>

            <div className="flex justify-center items-center p-3 mt-4">
                <button
                    onClick={() => router.push('/timecountdown')}
                    className={`w-[90%] h-[42px] text-white rounded-xl font-medium text-sm transition-all duration-300 bg-[#7722FF]`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default ScheduleService