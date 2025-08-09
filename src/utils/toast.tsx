'use client'

import toast from 'react-hot-toast'

type ToastType = 'success' | 'error' | 'info'

interface ShowToastProps {
  type: ToastType
  title: string
  message: string
}

export function showToast({ type, title, message }: ShowToastProps) {
  const baseStyles =
    'flex items-start gap-3 rounded-lg px-4 py-3 border-l-4 shadow-md max-w-sm w-full'

  const types: Record<ToastType, { bg: string; text: string; border: string; icon: string }> = {
    success: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      border: 'border-green-500',
      icon: '✅',
    },
    error: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      border: 'border-red-500',
      icon: '❗',
    },
    info: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-500',
      icon: 'ℹ️',
    },
  }

  const { bg, text, border, icon } = types[type]

  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'} ${baseStyles} ${bg} ${text} ${border}`}
    >
      <div className="text-xl mt-1">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  ))
}