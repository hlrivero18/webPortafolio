import React from "react";
import Link from "next/link";
import style from "./Nav.module.css"

export default function Nav() {
    const list = ['Acerca de mi', 'Proyectos', 'Contacto']

    return (
        <nav className={`${style.nav} z-50 hidden md:block backdrop-blur-md bg-white/30`}>
            <ul className="flex justify-around p-3">
                {list.map((l, i) =>
                    <li className="text-white text-lg flex" key={i}>
                        <a href={`#${l.toLowerCase()}`}>
                            {l}
                        </a>
                    </li>)}
            </ul>
        </nav>
    )
}