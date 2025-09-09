'use client'
import React, { useState, useEffect } from 'react'
import App from './components/App'
import DeskTop from './components/Desktop'

interface PageProps {
  params: { id: string }
}

function Page({ params }: PageProps) {
  const [isMobile, setIsMobile] = useState(false)
  const { id } = params
        
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window?.innerWidth < 768)
    }
    
    checkMobile()
    window?.addEventListener('resize', checkMobile)
    
    return () => window?.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <div>
      {isMobile ? <App id={id} /> : <DeskTop id={id} />}
    </div>
  )
}

export default Page