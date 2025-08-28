import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DatePickerCard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Get current month & year
  const monthYear = format(currentMonth, "MMMM, yyyy");

  // Generate all days of current month
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  // Handlers to navigate months
  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // Touch handlers for month swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    (e.currentTarget as HTMLElement).dataset.startX = touch.clientX.toString();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const startX = parseFloat((e.currentTarget as HTMLElement).dataset.startX || '0');
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 80) {
      if (diff > 0) {
        goToNextMonth();
      } else {
        goToPreviousMonth();
      }
    }
  };

  return (
    <div className="w-[90%]  rounded-xl mt-2  mx-auto">
      <h2 className="font-medium mb-3">Set Date</h2>

      {/* Month Header with navigation */}
      <div 
        className="flex justify-between items-center bg-gray-100 py-2 px-3 rounded-lg mb-3"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={goToPreviousMonth} className="p-1 rounded hover:bg-gray-200">
          <ChevronLeft size={18} className="text-purple-600 " />
        </button>
        <span className="font-medium">{monthYear}</span>
        <button onClick={goToNextMonth} className="p-1 rounded hover:bg-gray-200">
          <ChevronRight size={18} className="text-purple-600 " />
        </button>
      </div>

      {/* Scrollable Dates Container */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-thin rounded-lg scrollbar-track-transparent scrollbar-thumb-white/30 scrollbar-thumb-rounded-full backdrop-blur-sm">
          <div className="flex gap-2 p-3 bg-gray-100 rounded-lg min-w-max">
            {days.map((day, index) => {
              const isSelected =
                format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(day)}
                  className={`flex flex-col items-center justify-center min-w-[56px] h-14 rounded-lg transition whitespace-nowrap
                    ${isSelected ? "bg-purple-600 text-white" : "text-gray-800 hover:bg-purple-100"}`}
                >
                  <span className="text-xs">{format(day, "EEE")}</span>
                  <span className="text-sm font-medium">{format(day, "d")}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Glass-like scroll indicator */}
        {/* <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/40 rounded-full backdrop-blur-sm"></div> */}
      </div>
    </div>
  );
};

export default DatePickerCard;

// Add custom scrollbar styles
const styles = `
  .scrollbar-thin::-webkit-scrollbar {
    height: 4px;
  }
  .scrollbar-track-transparent::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-thumb-white\/30::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
  }
  .scrollbar-thumb-rounded-full::-webkit-scrollbar-thumb {
    border-radius: 9999px;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
