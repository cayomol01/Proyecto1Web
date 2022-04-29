import React from "react";
import './Card.scss';



export default function Navbar({size, img,amount,description}) {
    let brs = [];
    for(let i = 0; i < amount; i++){
        brs.push(<br key={i}/>)

    }
    

    let tamano = "contenedor " + size;
    return (
      <>

        <div className = {tamano} style= {{backgroundImage: `url(${img})`}}>
            <a href = "#">
            <div className="Contenedor2">
                <div className = "descripcion">{description}</div>
            </div>
            {brs}
            </a>
        </div>

      </>
    );
  } 