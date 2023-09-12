import React from "react";
//GOOGLE FONT
import { Oswald } from "next/font/google"

const oswald = Oswald({
    weight: ["400"],
    subsets: ["latin"]
})



export default function Tabs({ setProject, project }) {

    const handleChange = (e) => {
        const { value } = e.target
        setProject(value)
    }
    return (
        <>
            <div className="sm:hidden">
                <label for="tabs" className="sr-only">Select a project</label>
                <select onChange={handleChange} id="tabs" className="border text-sm rounded-lg block w-full p-2.5  backdrop-blur-sm bg-white/30">
                    <option value={0}>PokeApp</option>
                    <option value={1}>BOHO</option>
                    <option value={2}>Calculadora de edad</option>
                </select>
            </div>
            <ul className={`${oswald.className}z-50 w-96 hidden text-lg font-medium text-center border divide-x divide-gray-200 rounded-lg shadow sm:flex backdrop-blur-sm bg-white/30`}>
                <li className={project === 0 ? `w-full bg-sky-400 rounded-l-lg` : `w-full hover:bg-sky-500 hover:rounded-l-lg`}>
                    <button onClick={() => { setProject(0) }} className="inline-block w-full p-4">PokeApp</button>
                </li>
                <li className={project === 1 ? `w-full bg-sky-400` : `w-full hover:bg-sky-500`}>
                    <button onClick={() => { setProject(1) }} className="inline-block w-full p-4">BOHO</button>
                </li>
                <li className={project === 2 ? `w-full bg-sky-400 rounded-r-lg` : `w-full hover:bg-sky-500 hover:rounded-r-lg`}>
                    <button onClick={() => { setProject(2) }} className="inline-block w-full p-4">Cal. tu Edad</button>
                </li>
            </ul>
        </>
    )
}
