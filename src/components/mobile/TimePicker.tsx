import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

function TimePicker() {
    const times = [
  "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM",
  "08:00 PM", "08:30 PM",
  "09:00 PM", "09:30 PM",
  "10:00 PM"
];

    const [selectedTime, setSelectedTime] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    
    const itemsPerPage = 9;
    const totalPages = Math.ceil(times.length / itemsPerPage);
    const currentTimes = times.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    
    const goLeft = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : totalPages - 1);
    };
    
    const goRight = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : 0);
    };
    
    return (
        <div className="w-[90%] rounded-xl mt-2 mx-auto">
            <h2 className="font-medium mb-3">Set Time</h2>
            <div className="w-full h-32">
                <div className="grid grid-cols-3 gap-2 h-full">
                    {currentTimes.map((time) => (
                        <button 
                            key={time} 
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded-lg text-sm transition ${
                                selectedTime === time 
                                    ? 'bg-purple-600 text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                            }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-between gap-4 mt-3">
                <button onClick={goLeft} className="bg-gray-100 hover:bg-purple-50 p-2 rounded-full">
                    <ChevronLeft size={16} className="text-purple-600 hover:text-purple-600" />
                </button>
                <button onClick={goRight} className="bg-gray-100 hover:bg-purple-50 p-2 rounded-full">
                    <ChevronRight size={16} className="text-purple-600 hover:text-purple-600" />
                </button>
            </div>
        </div>
    )
}

export default TimePicker