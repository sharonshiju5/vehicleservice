'use client'
import React, { useState, useEffect } from 'react'
import App from './components/App'
import Desktop from './components/Desktop'

interface PageProps {
  params: Promise<{ id: string }>
}

function Page({ params }: PageProps) {
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
      {isMobile ? <App id={id} /> : <Desktop id={id} />}
    </div>
  )
}

export default Page