import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setAcceptedRequest } from '@/redux/acceptedRequestSlice';
import config from '@/services/socketio/config'
import socketService from "@/services/socketio/SocketService";



interface AcceptedRequest {
  providerId: string;
  requestId: string;
  timestamp: string;
}

interface Notification {
  type: string;
  providerId: string;
  requestId: string;
  timestamp: Date;
}

function Desktop() {
  const router = useRouter();
  const dispatch = useDispatch();
  const totalTime = 40;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [connectionStatus, setConnectionStatus] = React.useState('Disconnected');
  const [acceptedRequests, setAcceptedRequests] = React.useState<AcceptedRequest[]>([]);
  const [notifications, setNotifications] = React.useState<Notification[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const smoothTimer = setInterval(() => {
      setSmoothProgress((prev) => {
        const target = ((totalTime - timeLeft) / totalTime) * 100;
        return prev + (target - prev) * 0.1;
      });
    }, 50);
    return () => clearInterval(smoothTimer);
  }, [timeLeft, totalTime]);

  // Circle settings
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const progress = (smoothProgress / 100) * circumference;

  // Timer color change logic
  let strokeColor = "url(#purpleGradient)"; // purple gradient
  let gradientColor = "rgba(139, 92, 246, 0.1)"; // very light purple
  if (timeLeft <= 10) {
    strokeColor = "#ef4444"; // red
    gradientColor = "rgba(239, 68, 68, 0.1)"; // very light red
  } else if (timeLeft <= 30) {
    strokeColor = "#facc15"; // yellow
    gradientColor = "rgba(250, 204, 21, 0.1)"; // very light yellow
  }

  // Format time (MM:SS)
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  useEffect(() => {
    // Connect to Socket.IO server
    console.log('App.js config.SOCKET_URL:', config.SOCKET_URL);
    const socket = socketService.connect(config.SOCKET_URL);


    socket.on('connect', () => {
      console.log('Connected');
      setConnectionStatus('Connected');
      const customerId = localStorage.getItem('userId');
      socket.emit('joinCustomerRoom', customerId);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected');
      setConnectionStatus('Disconnected');
    });


    // Listen for request acceptance
    socket.on('requestAccepted', (data: AcceptedRequest) => {
      console.log('requestAccepted time:', data);
      dispatch(setAcceptedRequest(data));
      setAcceptedRequests(prev => [...prev, data]);
      const notification = {
        type: 'Request Accepted',
        providerId: data.providerId,
        requestId: data.requestId,
        timestamp: new Date(data.timestamp)
      };
      setNotifications(prev => [notification, ...prev]);
      router.push('/foundservicer');
    });

    return () => {
      socketService.disconnect();
    };
  }, []);


  return (
    <div className='w-full bg-white min-h-screen'>
      <div
        className="w-full h-[120px] transition-all duration-500"
        style={{
          background: `linear-gradient(180deg, ${gradientColor} 0%, transparent 100%)`
        }}
      ></div>

      {/* Timer Circle */}
      <div className="flex flex-col items-center mt-16 relative">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200/30 to-purple-300/20 blur-xl scale-110"></div>

          <svg width="250" height="250" className="rotate-[-90deg] relative z-10 drop-shadow-lg">
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {/* Background circle */}
            <circle
              cx="125"
              cy="125"
              r={radius}
              stroke="#f8f9fa"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />

            {/* Progress circle */}
            <circle
              cx="125"
              cy="125"
              r={radius}
              stroke={strokeColor}
              strokeWidth="14"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.05s linear'
              }}
            />
          </svg>

          {/* Timer Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 leading-none">
                {minutes}:{seconds}
              </div>
              <div className="text-sm font-medium text-gray-500 mt-1">mins</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      {timeLeft > 0 ? (
        <div className="mt-10 text-center">
          <p className="font-semibold">Waiting for Your Service Partner</p>
          <p className="text-sm text-gray-500">
            We&apos;ve notified your partner. Hang tight! <br />
            don&apos;t close the tab
          </p>
        </div>
      ) : (
        <div className="mt-10 flex justify-center">
          <div className="max-w-sm">
            <div className="border-l-4 border-red-500 bg-red-50 p-3 rounded">
              <p className="text-red-600 font-medium mb-1 text-sm">
                We couldn&apos;t confirm this partner&apos;s arrival.
              </p>
              <p className="text-xs text-gray-600">
                Please try another service partner within 10 km distance.
              </p>
            </div>
            <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg font-semibold text-sm">
              Next Sam
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Desktop