import { ReactNode } from 'react'
import './globals.css'
import DesktopHeader from '@/components/header/DesktopHeader'
import ReduxProvider from '@/components/providers/ReduxProvider'


export const metadata = {
  title: 'Seclob Service',
  description: 'SecLob Service Application',
  icons: {
    icon: '/assets/logo/Layer_1 (7).png',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className='flex flex-col min-h-screen'>
            <header className="hidden md:block fixed top-0 left-0 right-0 z-50">
              <DesktopHeader />
            </header>
            <main className="flex-grow md:pt-16">
              {children}
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
