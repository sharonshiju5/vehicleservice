'use client'

import React, { useEffect, useState, Suspense } from 'react'
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
            <Suspense fallback={<div>Loading...</div>}>
              {isMobile ? <App /> : <Desktop />}
            </Suspense>
          </div>
        </>
      )
}

export default Page