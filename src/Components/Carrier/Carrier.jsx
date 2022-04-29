import React from "react";
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




export default function Carrier() {
    const fotos = [Espacio1, Espacio2, Espacio3, Espacio4, Espacio6, Espacio7, Espacio8, Espacio9, Espacio10, Espacio11]
    const descripciones = ["Humans in Space", "Moon to Mars", "Earth", "Space Tech", "Flight", "Solar System and Beyond", "STEM Engagement", "History", "Benefits to You"]
    const tamanos = ["col col-sm-6","col col-sm-4"]

    
  
    return (
      <>
         <Barra />
         <div className="container">
            <div className="row">
                <Carta size={tamanos[0]} img={Espacio1}amount = {20} description="hola que ase"/>
                
                <Carta size={tamanos[1]} img={Espacio1} amount = {10} description="ave maría purisima"/>
                <Carta size={tamanos[1]} img={Espacio1} amount = {10} description="ave maría purisima"/>
            </div>
        </div>
      </>
    );
  }