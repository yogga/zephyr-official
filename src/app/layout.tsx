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
         
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" /> 
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