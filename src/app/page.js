//COMPONENTS
import Name from "@/components/Name/Name"
import Projects from "@/components/Projects/Projects"
import About from "@/components/about/about"
import Contact from "@/components/contacts/contact"
import Footer from "@/components/footer/footer"
//GOOGLE FONT
import { Oswald } from "next/font/google"

const oswald = Oswald({
  weight: ["400"],
  subsets: ["latin"]
})


export default function Home() {
  return (
    <div className="text-white">
      <div className="grid w-full h-screen place-content-center gap-5">
        <div>
          <Name />
        </div>
        <div className={`${oswald.className} text-lg text-center p-5 animate-fade-down animate-once`}>
          <p>
            {'"Soy un desarrollador JavaScript y mi mision es superarme a mi mismo."'}
          </p>
        </div>
      </div>
      <About/>
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
}
