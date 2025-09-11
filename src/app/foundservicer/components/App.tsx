import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { clearAcceptedRequest } from '@/redux/acceptedRequestSlice'
import { FaStar } from "react-icons/fa"

function App() {
    const dispatch = useDispatch()
    const acceptedRequestData = useSelector((state: RootState) => state.acceptedRequest.data)

    useEffect(() => {
        const handlePopState = () => {
            dispatch(clearAcceptedRequest())
        }

        window.addEventListener('popstate', handlePopState)
        
        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [dispatch])

    return (
        <div className='w-full bg-white h-screen flex items-center justify-center'>
            <div className="fixed top-0 left-0 w-full h-[500px] bg-[linear-gradient(180deg,#e6d9ff_0%,#ffffff_100%)] z-10">  </div>
            <div className=" w-[90%] bg-white rounded-2xl shadow p-4 relative z-20 ">
                {/* Header */}
                <div className="flex items-center gap-3 z-100 ">
                    <img
                        src="https://i.pravatar.cc/50"
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">Service Partner</h2>
                        <p className="text-sm text-gray-500">Request Accepted</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 font-medium px-2 py-1 rounded">
                        Confirmed
                    </span>
                </div>

                {/* Body */}
                <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px]">Provider ID</span>
                        <span className="font-medium text-gray-600">{acceptedRequestData?.providerId || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px]">Request ID</span>
                        <span className="font-medium text-gray-600">{acceptedRequestData?.requestId || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px]">Accepted Time</span>
                        <span className="font-medium text-gray-600">{acceptedRequestData?.timestamp || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[14px] leading-[20px] tracking-[0.1px]">Status</span>
                        <span className="flex items-center gap-1 text-green-500">
                            <FaStar className="text-green-400" /> Accepted
                        </span>
                    </div>
                </div>

                {/* Footer Button */}
                <div className="flex gap-3 mt-4">
                    <button className="flex-1 py-2 bg-[#1FC16B] text-white rounded-lg hover:bg-green-600">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App