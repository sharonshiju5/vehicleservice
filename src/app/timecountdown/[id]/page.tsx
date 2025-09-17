'use client'


import React, { useEffect, useState } from 'react'
import App from './components/App'
import Desktop from './components/Desktop'
import { use } from "react"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

function Page({ params }: PageProps) {
  const { id } = use(params)
  
    const [isMobile, setIsMobile] = useState(false)
    
      useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window?.innerWidth < 768)
        }
        
        checkMobile()
        window?.addEventListener('resize', checkMobile)
        
        return () => window?.removeEventListener('resize', checkMobile)
      }, [])
      return(
        <>
          <div>
          {isMobile ? <App id={id} /> : <Desktop id={id} />}
        </div>
        </>
      )
}

export default Page