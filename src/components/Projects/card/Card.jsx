import React from "react";
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


export default function Card(props) {
    const { name, imagen, description, deployment } = props
    return (
        <div className={`${oswald.className} animate-fade-down animate-once md:w-[40rem] relative rounded-lg p-5 backdrop-blur-sm bg-white/30 w-full`}>
            <h1 className="text-xl border-b-[3px] w-40">{name}</h1>
           <a href={deployment} target="_blank" className="flex justify-around w-full p-4">
                {imagen && 
                <>
                   <img src={imagen[0]} alt="project" width="78%" /> 
                   <img src={imagen[1]} alt="project responsive" width="19%" />
                </>}
          </a>

            <p className={`${ibmPlexMono.className} text-black text-xs`}>
                {description}
            </p>
        </div>
    )
}