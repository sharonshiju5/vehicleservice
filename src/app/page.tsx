"use client"

import DesktopLanding from "@/components/landingpage/DesktopLanding"
import MobileLanding from "@/components/landingpage/MobileLanding"
import { useEffect, useState } from "react"

export default function HomePage(){
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
      {isMobile ? <MobileLanding /> : <DesktopLanding />}
    </div>
    </>
  )
}