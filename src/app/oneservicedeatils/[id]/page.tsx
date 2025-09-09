'use client'
import React, { useState, useEffect } from 'react'
import App from './components/App'
import DeskTop from './components/Desktop'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [isMobile, setIsMobile] = useState(false)
  const [id, setId] = useState<string>('')
  
  useEffect(() => {
    params.then(resolvedParams => {
      setId(resolvedParams.id)
    })
  }, [params])
        
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