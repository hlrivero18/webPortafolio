'use client'

import React from "react";
import { useState } from "react";
//COMPONENTS
import Tabs from "./tabs/Tabs";
import Card from "./card/Card";


export default function Projects() {
    const info = [
        {
            name: "PokeApp",
            img: ["https://res.cloudinary.com/dgbovhcre/image/upload/v1694477806/wnyqarf2eqm15sofh97r.png", "https://res.cloudinary.com/dgbovhcre/image/upload/v1694477806/dculwanppsck4mqebn5g.png"],
            description: "PokeApp is a SPA(single page aplication), developed with ReactJs, ExpressJs, Sequelize and PostgreSQL.",
            deployment: "https://pokemon-omega-three.vercel.app/"
        },
        {
            name: "BOHO",
            img: ["https://res.cloudinary.com/dgbovhcre/image/upload/v1694479235/f9jxed0rsccte2lw7fwp.png", "https://res.cloudinary.com/dgbovhcre/image/upload/v1694479234/erppvemm9h8xduvfl518.png"],
            description: "BOHO is a website to sell and buy tickets for recreational events, BOHO was developed by 7 people using ReactJs, Tailwind-CSS, ExpressJs, Sequelize and PostgreSQL.",
            deployment: "https://pf-ptb-grupo-06.vercel.app/"
        },
        {
            name: 'Calculadora de Edad',
            img: ["https://res.cloudinary.com/dgbovhcre/image/upload/v1694523457/rnbk1nhnxnslrpgdsiwa.png", "https://res.cloudinary.com/dgbovhcre/image/upload/v1694523359/cowivzr9txcn9bym8r3o.png"],
            description: "web app."
        }
    ]

    const [project, setProject] = useState(0)

    return (
        <div id="projects" className={`p-10 grid grid-rows-[1fr,1fr,auto] justify-center gap-4`}>
            <h1 className="text-3xl text-center border-b-4 border-up">
                Projects
            </h1>
            <div className="justify-self-center">
                <Tabs 
                setProject={setProject} 
                project={project}/>
            </div>
                <Card 
                key={project} 
                name={info[project]?.name} 
                imagen={info[project]?.img} 
                description={info[project]?.description}
                deployment={info[project]?.deployment}
                />
        </div>

    )
}