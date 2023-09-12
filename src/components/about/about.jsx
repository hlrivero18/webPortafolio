import React from "react";
import { SiNextdotjs, SiReact, SiJavascript, SiExpress, SiSequelize, SiPostgresql, SiNodedotjs } from "react-icons/si";
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


const imges = ["https://res.cloudinary.com/dgbovhcre/image/upload/v1694546731/Img/Polish_20230912_161659338_cef8t8.png", "https://res.cloudinary.com/dgbovhcre/image/upload/v1694533166/me_3_usjxsm.jpg", "https://res.cloudinary.com/dgbovhcre/image/upload/v1694533910/vu7we85asc59cbzzpzau.jpg"]

export default function About() {
    return (
        <div id="acerca de mi" className={`${oswald.className} p-5 md:p-10 xl:w-4/5 m-auto`}>
            <h1 className="text-2xl pb-4">Me llamo Hector Luis Rivero y soy...</h1>
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
                <div className={`${ibmPlexMono.className} grid gap-2 text-sm py-4`}>
                    <p>
                        Desarollador Javascript, agil, autodidacta y responsable, me gusta resolver problemas
                        usando las herramientas tecnologicas que se nos presentan dia a dia, siempre con una
                        vision dinamica para la mejor experiencia del cliente.
                    </p>
                    <p>
                        Actualmente trabajo con tecnologias del front-end como React, Tailwind, Redux,
                        Router y NextJs, y en el back-end con ExpressJs, Sequelize y PosgreSQL. Ademas de otras
                        herramientas como Git, scrum y figma.
                    </p>
                    <p>
                        Soft skills: resolucion de problemas, autocritica, gestion de tiempo y trabajo en equipo.
                    </p>
                    <p>
                        tech skills:
                        <span className="mt-3 text-3xl flex gap-2 justify-around">
                            <SiJavascript />
                            <SiReact />
                            <SiNextdotjs />
                            <SiNodedotjs />
                            <SiExpress />
                            <SiSequelize />
                            <SiPostgresql />
                        </span>
                    </p>
                </div>
                <div className="md:w-96 md:h-96 m-auto lg:ml-auto">
                    <img className="w-full h-full rounded-full border-[10px]" src={imges[1]} alt="abo" />
                </div>
            </div>
        </div>
    )
}