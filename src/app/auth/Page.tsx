"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function AuthPage() {
  const searchParams = useSearchParams()
  const refreshToken = searchParams.get('refreshtoken')

  useEffect(() => {
    const handleAuth = async () => {
      if (!refreshToken) return

      try {
        const response = await fetch('https://apigateway.seclob.com/v1/user-no/auth/token-refresh-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refreshToken: refreshToken
          })
        })

        const data = await response.json()

        if (data.success) {
          // Store all data in localStorage
          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshtoken', data.refreshToken)
          localStorage.setItem('unique_id', data.unique_id)
          localStorage.setItem('email', data.email)
          localStorage.setItem('phone', data.phone)
          localStorage.setItem('userId', data.userId)
          localStorage.setItem('name', data.name)
          
          // Navigate to home on success
          window.location.href = '/'
        } else {
          // Navigate to seclob.com on failure
          window.location.href = 'https://seclob.com'
        }
      } catch (error) {
        console.error('Auth error:', error)
          window.location.href = 'https://seclob.com'
      }
    }

    handleAuth()
  }, [refreshToken])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4">Authenticating...</p>
      </div>
    </div>
  )
}