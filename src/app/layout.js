// 'use client'
import Head from 'next/head';
import './globals.css'
// import { useState } from 'react'
//COMPONENTS
import Nav from '@/components/Nav/Nav'
import BurgerMenu from '@/components/burgerMenu/burgerMenu'
//GOOGLE FONT
import { Bebas_Neue } from "next/font/google"

export const metadata = {
  title: '___Hector_Luis___',
  description: '',
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-ico.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
}

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  // const [menuOn, setMenuOn] = useState(false)

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <body className={`${bebas.className} bg-fixed bg-gradient-to-b from-up from-20% via-c via-60% to-down to-90%`}>
        <Nav />
        <BurgerMenu />
        <div id='divChlildren'>
          {children}
        </div>
      </body>
    </html>
  )
}