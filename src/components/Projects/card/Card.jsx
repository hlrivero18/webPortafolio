import React from "react";

export default function Card(props){
    const {name, imagen, description} = props
    return(
        <div className="relative rounded-lg p-5 backdrop-blur-sm bg-white/30 w-full">
            <h1 className="text-xl">{name}</h1>
            <div className="flex w-full p-4">
                <img src={imagen[0]} alt="project"  width="80%"/>
                <img src={imagen[1]} alt="project responsive" width="20%"/>
            </div>
            
            <p>{description}</p>
        </div>
    )
}