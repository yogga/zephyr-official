import './globals.css'  
import type { Metadata } from 'next'  
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'  

const inter = Inter({ subsets: ['latin'] })  

export const metadata: Metadata = {  
  title: 'Zephyr Official',  
  description: 'Wangi Enak Poll',  
}  

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <head>  
        {/* Favicon Links */}  
        <link rel="icon" href="/logo-zephyr.png" sizes="32x32" />  
        <link rel="icon" href="/logo-zephyr.png" sizes="192x192" />  
        <link rel="apple-touch-icon" href="/logo-zephyr.png" />  
        <meta name="theme-color" content="#ffffff" />  
      </head>  
      <body 
        className={inter.className}>
        {children}
        <SpeedInsights />
      </body>  
    </html>  
  )  
}