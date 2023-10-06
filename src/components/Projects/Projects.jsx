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
            img: ["https://res.cloudinary.com/pokeapp/image/upload/v1694477806/wnyqarf2eqm15sofh97r.png", "https://res.cloudinary.com/pokeapp/image/upload/v1694477806/dculwanppsck4mqebn5g.png"],
            description: "PokeApp es una SPA(single page aplication), desarrollada con ReactJs, ExpressJs, Sequelize y PostgreSQL.",
            deployment: "https://pokemon-omega-three.vercel.app/"
        },
        {
            name: "BOHO",
            img: ["https://res.cloudinary.com/pokeapp/image/upload/v1694479235/f9jxed0rsccte2lw7fwp.png", "https://res.cloudinary.com/pokeapp/image/upload/v1694479234/erppvemm9h8xduvfl518.png"],
            description: "BOHO es un sitio web de compra/venta de tickets para eventos recreativos, BOHO fue desarrollado por siete personas usando ReactJs, Tailwind-CSS, ExpressJs, Sequelize y PostgreSQL.",
            deployment: "https://pf-ptb-grupo-06.vercel.app/"
        },
        {
            name: 'Calculadora de Edad',
            img: ["https://res.cloudinary.com/pokeapp/image/upload/v1694523028/vzmlr9tgkfjbxrlpykxa.png", "https://res.cloudinary.com/pokeapp/image/upload/v1694523359/cowivzr9txcn9bym8r3o.png"],
            description: "Es un sitio Web donde proporcionas tu fecha de nacimiento y como resultado conoces cuantos años, meses y dias tienes."
        }
    ]

    const [project, setProject] = useState(0)

    return (
        <div id="proyectos" className={`p-10 grid grid-rows-[1fr,1fr,auto] justify-center gap-4`}>
            <h1 className="text-3xl text-center border-b-4 border-up">
                Proyectos
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