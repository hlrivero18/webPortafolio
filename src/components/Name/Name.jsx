import React from "react";
import { BiLogoInstagram, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import style from "./Name.module.css"

//GOOGLE FONT
import { Oswald, IBM_Plex_Mono } from "next/font/google"

const oswald = Oswald({
    weight: ["400"],
    subsets: ["latin"]
})

const ibmPlexMono = IBM_Plex_Mono({
    weight: ["400"],
    subsets: ["latin"]
})

export default function Name() {
    return (
        <div className="grid justify-center text-center">
            <span className={`text-7xl animate-fade-up animate-once`}>
                Hi, I{"'"}m <br className="md:hidden" /> Hector Luis!
            </span>
            <p className={`${ibmPlexMono.className} ${style.description} text-xl`}>Full Stack Web Developer</p>
            <div className="w-full flex justify-around text-4xl mt-2">
                <a className="backdrop-blur-md bg-white/30 hover:bg-gradient-to-tr from-yellow-500 via-orange-600 to-fuchsia-700 rounded-full p-1" href="https://www.instagram.com/hlrivero18/" target="_blank">
                    <BiLogoInstagram />
                </a>
                <a className="backdrop-blur-md bg-white/30 hover:bg-black rounded-full p-1" href="https://github.com/hlrivero18" target="_blank">
                    <BiLogoGithub />
                </a>
                <a className="backdrop-blur-md bg-white/30 hover:bg-blue-900 rounded-full p-1" href="https://www.linkedin.com/in/hector-luis-rivero-311578260/" target="_blank">
                    <BiLogoLinkedinSquare />
                </a>
            </div>
        </div>
    )
}