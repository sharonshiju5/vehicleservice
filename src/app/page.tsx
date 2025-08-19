"use client"

import DesktopLanding from "@/components/landingpage/DesktopLanding"
import MobileLanding from "@/components/landingpage/MobileLanding"
import { useEffect, useState } from "react"

export default function HomePage(){
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window?.innerWidth < 768)
    }
    
    checkMobile()
    window?.addEventListener('resize', checkMobile)
    
    return () => window?.removeEventListener('resize', checkMobile)
  }, [])
  
  if (isMobile === undefined) {
    return <div style={{ minHeight: '100vh' }} />
  }
  
  return(
    <>
      <div>
      {isMobile ? <MobileLanding /> : <DesktopLanding />}
    </div>
    </>
  )
}