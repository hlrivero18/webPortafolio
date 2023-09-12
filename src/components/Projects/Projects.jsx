import React from "react";
//COMPONENTS
import Tabs from "./tabs/Tabs";
import Card from "./card/Card";


export default function Projects() {
    const info = [
        {name: "PokeApp", 
        img:["https://res.cloudinary.com/dgbovhcre/image/upload/v1694477806/wnyqarf2eqm15sofh97r.png", "https://res.cloudinary.com/dgbovhcre/image/upload/v1694477806/dculwanppsck4mqebn5g.png"], 
        description: "PokeApp es una aplicacion SPA(single page aplication) con el fin de buscar pokemones por su nombre y mostrar el detalle"
    },
    {
        name: "BOHO",
        img:["https://res.cloudinary.com/dgbovhcre/image/upload/v1694479235/f9jxed0rsccte2lw7fwp.png", "https://res.cloudinary.com/dgbovhcre/image/upload/v1694479234/erppvemm9h8xduvfl518.png"],
        description:"aplicacion de venta de boletos para eventos desarrollada por 7 personas"
    }
    ]
    return (
        <div className={`p-10 grid grid-rows-[1fr,1fr,auto] justify-center gap-4`}>
            <h1 className="text-3xl text-center border-b-4 border-up">
                Projects
            </h1>
            <div className="justify-self-center">
              <Tabs/>  
            </div>
           {info && info.map((e, i)=>{
            return(
                <div className="justify-self-center">
                   <Card key={i} name={e.name} imagen={e.img} description={e.description}/> 
                </div>
            )
           })}
        </div>

    )
}