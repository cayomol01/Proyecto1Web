import React from "react";
import './Carrier.scss';
import Nasa from "../../Assets/nasa-logo.svg";



export default function Carrier() {

    
  
    return (
      <>
       <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid" id = "contenedor">
                <div className = "navbar-header">
                    <a className="navbar-brand" href="#"><img id = 'logo' src = {Nasa}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav"> 
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    );
  }