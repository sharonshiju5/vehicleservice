'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Mobilefooter from '@/components/footer/Mobilefooter'
import WebFooter from '@/components/footer/WebFooter'

const NavWrapper = () => {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  
  const noFooterRoutes = [ '/seeall', '/auth/register','/recruter/register','/recruter/jobpost']
  const shouldShowFooter = !noFooterRoutes.some(route => pathname.startsWith(route))
  
  if (!shouldShowFooter) return null
  
  return isMobile ? <Mobilefooter /> : <WebFooter />
}

export default NavWrapper
