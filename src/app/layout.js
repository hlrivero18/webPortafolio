import './globals.css'
import Nav from '@/components/Nav/Nav'
import {Bebas_Neue} from "next/font/google"

export const metadata = {
  title: '___Hector_Luis2___',
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
