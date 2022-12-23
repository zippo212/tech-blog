"use client"

import { ThemeProvider } from 'next-themes'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../styles/globals.css'
import '../../styles/prism.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
      <ThemeProvider attribute="class">
      <div className='dark:bg-[#2b6777]'>
        <div className='max-w-7xl mx-auto'>
          <Header/>
          <Banner/>
          {children}
          <Footer/>
        </div>
      </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
