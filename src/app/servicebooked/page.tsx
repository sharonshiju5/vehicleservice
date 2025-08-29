'use client'


import React, { useEffect, useState } from 'react'
import App from './components/App'
import Desktop from './components/Desktop'

function Page() {
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
          {isMobile ? <App /> : <Desktop />}
        </div>
        </>
      )
}

export default Page