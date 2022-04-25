import React from "react";
import './Carrier.scss';
import Nasa from "../../Assets/nasa-logo.svg";



export default function Carrier() {

    
  
    return (
      <>
       <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid" id = "main_navbar">
                <div className = "navbar-header">
                    <a className="logo" href="#"><img  src = {Nasa}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul>

                    </ul>
                    <ul className="nav navbar-nav" id = "main-menu"> 
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" id = "topics">
                                <span>Topics</span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="#">Humans in Space</a>
                                </li>

                            </ul>


                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    Missions
                                </span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    Galleries
                                </span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    NASA TV
                                </span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    Follow NASA
                                </span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    Downloads
                                </span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    About
                                </span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    Nasa Audiences
                                </span>
                                <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
      </>
    );
  }