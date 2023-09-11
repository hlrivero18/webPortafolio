import Name from "@/components/Name/Name"
import {Oswald} from "next/font/google"

const oswald = Oswald({
    weight:["400"],
    subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="text-white">
      <div className="grid w-full h-screen place-content-center gap-5">
        <div>
          <Name />
        </div>
        <div className={`${oswald.className} text-lg text-center p-5`}>
          <p>I am a javascript developer and my mission is overcome myself.
          </p>
        </div>
      </div>
    </div>
  )
}
