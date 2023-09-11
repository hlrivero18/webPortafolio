import React from "react";
import Link from "next/link";
import style from "./Nav.module.css"

export default function Nav() {
    const list = ['About', 'Projects', 'Contact']

    return (
        <nav className={`${style.nav} hidden md:block`}>
            <ul className="flex justify-around p-5">
                {list.map((l, i) =>
                    <li className="text-white text-xl flex" key={i}>
                        <a href={`#${l.toLowerCase()}`}>
                            {l}
                        </a>
                    </li>)}
            </ul>
        </nav>
    )
}