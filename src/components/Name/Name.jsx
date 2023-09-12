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
            <div className="w-full flex justify-around text-4xl">
                <a className="rounded-full hover:bg-gray-400 w-10 h-10 inline-flex justify-center items-center" href="https://www.instagram.com/hlrivero18/" target="_blank">
                    <BiLogoInstagram />
                </a>
                <a className="rounded-full hover:bg-gray-400 w-10 h-10 inline-flex justify-center items-center" href="https://github.com/hlrivero18" target="_blank">
                    <BiLogoGithub />
                </a>
                <a className="rounded-full hover:bg-gray-400 w-10 h-10 inline-flex justify-center items-center" href="https://www.linkedin.com/in/hector-luis-rivero-311578260/" target="_blank">
                    <BiLogoLinkedinSquare />
                </a>
            </div>
        </div>
    )
}