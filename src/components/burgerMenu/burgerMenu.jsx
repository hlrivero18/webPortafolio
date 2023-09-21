'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi"
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

export default function BurgerMenu(props) {
    const list = ['Inicio', 'Acerca de mi', 'Proyectos', 'Contacto']
    const router = useRouter()
    const [menuOn, setMenuOn] = useState(false)
   
    return (
        <div className="md:hidden p-6 fixed text-3xl z-50">
            <button className="border p-1 backdrop-blur-sm bg-white/30" onClick={()=>{setMenuOn(!menuOn)}}><BiMenu /></button>
            {
                menuOn &&
                <ul className={`${ibmPlexMono.className} animate-fade-down animate-once bg-gray-200 text-lg text-black py-4 px-2`}>
                    {list.map((l, i) =>
                        <li className="p-2 hover:bg-gray-400" key={i}>
                            <button onClick={()=>{
                               router.push(`#${l.toLowerCase()}`) 
                               setMenuOn(false)
                            }}>{l}</button>
                        </li>)}
                </ul>
            }
        </div>
    )
}