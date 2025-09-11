import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerCardProps {
  onDateChange?: (date: string) => void;
}

const DatePickerCard: React.FC<DatePickerCardProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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



  return (
    <div className="w-[90%]  rounded-xl mt-2  mx-auto">
      <h2 className="font-medium mb-3">Set Date</h2>

      {/* Month Header with navigation */}
      <div className="flex justify-between items-center bg-gray-100 py-2 px-3 rounded-lg mb-3">
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
        <div 
          ref={scrollRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`overflow-x-auto overflow-y-hidden rounded-lg select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`} 
          style={{ 
            scrollbarWidth: 'thin', 
            scrollbarColor: 'rgba(255,255,255,0.3) transparent',
            scrollBehavior: 'smooth'
          }}
        >
          <div className="flex gap-2 p-3 bg-gray-100 rounded-lg" style={{ width: 'max-content' }}>
            {days.map((day, index) => {
              const isSelected =
                format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
              return (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedDate(day);
                    onDateChange?.(format(day, "yyyy-MM-dd"));
                  }}
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
