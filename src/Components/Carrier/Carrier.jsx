import React from "react";
import {useState} from "react";
import './Carrier.scss';
import Barra from "../NavBar/NavBar.jsx"
import Carta from "../Card/Card.jsx"
import Espacio1 from "../../Assets/Espacio1.jpg"
import Espacio2 from "../../Assets/Espacio2.jpg"
import Espacio3 from "../../Assets/Espacio3.jpg"
import Espacio4 from "../../Assets/Espacio4.jpg"
import Espacio6 from "../../Assets/Espacio6.jpg"
import Espacio7 from "../../Assets/Espacio7.jpg"
import Espacio8 from "../../Assets/Espacio8.jpg"
import Espacio9 from "../../Assets/Espacio9.jpg"
import Espacio10 from "../../Assets/Espacio10.png"
import Espacio11 from "../../Assets/Espacio11.jpg"

const fotos = [Espacio1, Espacio2, Espacio3, Espacio4, Espacio6, Espacio7, Espacio8, Espacio9, Espacio10, Espacio11]
const descripciones = ["Humans in Space", "Moon to Mars", "Earth", "Space Tech", "Flight", "Solar System and Beyond", "STEM Engagement", "History", "Benefits to You", "Poner 100"]
const tamanos = ["col col-sm-8","col col-sm-6", "col col-sm-4"]
const alturas = [20,10]
let cards = [];
var alto;
var grosor;

for(let i = 0; i < fotos.length; i+=2){
    alto = alturas[Math.floor(Math.random() * alturas.length)]
    grosor = tamanos[Math.floor(Math.random() * tamanos.length)]
    cards.push(<div className="row" key={i}>
                <Carta key={i} size={grosor} img={fotos[i]} amount={alto} description={descripciones[i]}/>
                <Carta key={i+1} size="col" img={fotos[i+1]} amount = {alto} description={descripciones[i+1]}/>
                </div>)
}

export default function Carrier() {


    const [p_mostradas, set_pMostradas] = useState(2);    
    const [mostrar, setMostrar] = useState(cards.slice(0,p_mostradas))


    
    function imprimit(){
        set_pMostradas(p_mostradas+1)
        setMostrar(cards.slice(0,p_mostradas+1))
        console.log(p_mostradas)
        console.log(mostrar.length)
        
    }

  
    return (
      <>
         <Barra />
         <div className="container">
            {mostrar}
            <button type = "button" className= {` ${(p_mostradas*2==fotos.length) ? "no-load" : "load"}`} onClick={imprimit}>More Stories</button>
        </div>
      </>
    );
  }