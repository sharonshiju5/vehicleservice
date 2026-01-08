import { ReactNode } from 'react'
import './globals.css'
import DesktopHeader from '@/components/header/DesktopHeader'
import ReduxProvider from '@/components/providers/ReduxProvider'
import { Toaster } from 'react-hot-toast'
import NavWrapper from '@/hooks/NavWrapper'


export const metadata = {
  title: 'Seclob Service',
  description: 'SecLob Service Application',
  icons: {
    icon: [{ url: '/logo/meta.ico', sizes: 'any', type: 'image/ico' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <div className='flex flex-col min-h-screen'>
            <header className="hidden md:block fixed top-0 left-0 right-0 z-50">
              <DesktopHeader />
            </header>
            <main className="flex-grow md:pt-16">
              {children}
            </main>
          </div>
          <Toaster position="top-right" />
          <NavWrapper />
        </ReduxProvider>
      </body>
    </html>
  )
}
