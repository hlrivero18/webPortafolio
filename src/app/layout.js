import './globals.css'
//COMPONENTS
import Nav from '@/components/Nav/Nav'
//GOOGLE FONT
import {Bebas_Neue} from "next/font/google"

export const metadata = {
  title: '___Hector_Luis___',
  description: '',
}

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.className} bg-fixed bg-gradient-to-b from-up from-20% via-c via-60% to-down to-90%`}>
          <Nav/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
