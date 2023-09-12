import React from "react";
//GOOGLE FONT
import {Oswald} from "next/font/google"

const oswald = Oswald({
    weight:["400"],
    subsets: ["latin"]
})

export default function Tabs() {
    return (
        <>
            <div className="sm:hidden">
                <label for="tabs" className="sr-only">Select a project</label>
                <select id="tabs" className="border text-sm rounded-lg block w-full p-2.5  backdrop-blur-sm bg-white/30">
                    <option>PokeApp</option>
                    <option>BOHO</option>
                    <option>Calculadora de edad</option>
                </select>
            </div>
            <ul className={`${oswald.className}z-50 w-96 hidden text-lg font-medium text-center border divide-x divide-gray-200 rounded-lg shadow sm:flex backdrop-blur-sm bg-white/30`}>
                <li className="w-full">
                    <a href="" className="inline-block w-full p-4 rounded-l-lg active" aria-current="page">PokeApp</a>
                </li>
                <li className="w-full">
                    <a href="" className="inline-block w-full p-4">BOHO</a>
                </li>
                <li className="w-full">
                    <a href="" className="inline-block w-full p-4 rounded-r-lg">Cal. de Edad</a>
                </li>
            </ul>
        </>
    )
}