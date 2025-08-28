import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import AddressCard from '@/components/mobile/AddressCard'
import DatePickerCard from '@/components/mobile/DatePickerCard'
import TimePicker from '@/components/mobile/TimePicker'
import IssueDescribe from '@/components/mobile/IssueDescribe'

function App() {
    const router = useRouter()
    return (
        <div>
            <div className='fixed top-0 left-0 right-0 z-30 w-full'>
                <div className="w-full bg-white shadow-sm px-4 py-4 flex items-center gap-3 text-center ">
                    <button onClick={() => router.back()} className="p-2 -ml-2">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <p className='font-medium text-[16px] leading-[18px] tracking-[-0.36px] text-center'>Schedule service </p>
                </div>
            </div>
            <div className='pt-22'>
                <AddressCard />
            </div>
            <DatePickerCard />
            <TimePicker />
            <IssueDescribe />

            <div className="fixed bottom-0 left-0 right-0 bg-white w-full flex justify-center items-center p-3">
                <button
                    className={`w-[90%] h-[42px] text-white rounded-xl font-medium text-sm transition-all duration-300 bg-[#7722FF] `}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default App