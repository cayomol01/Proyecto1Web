import React from "react";
import './NavBar.scss';
import Nasa from "../../Assets/nasa-logo.svg";
import 'bootstrap';


export default function Navbar() {

    
  
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
                    <ul className="nav navbar-nav" id = "main-menu"> 
                        <li className="dropdown">
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="#">Humans in Space</a>
                                </li>
                                <li>
                                    <a href="#">Moon to Mars</a>
                                </li>
                                <li>
                                    <a href="#">Earth</a>
                                </li>
                                <li>
                                    <a href="#">Space Tech</a>
                                </li>
                                <li>
                                    <a href="#">Flight</a>
                                </li>
                                <li>
                                    <a href="#">Solar System and Beyond</a>
                                </li>
                                <li>
                                    <a href="#">STEM Engagement</a>
                                </li>
                                <li>
                                    <a href="#">History</a>
                                </li>
                                <li>
                                    <a href="#">Benefits to You</a>
                                </li>

                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    Missions
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Artemis I</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Commercial Crew</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Dart</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Hubble Space Telescope</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">James Webb Space Telescope</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Juno Mission at Jupiter</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">International Space Station</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Perseverance Mars Rover</a>
                                </li>
                                <li>
                                    <a href="https://www.nasa.gov/artemis-1">Parker Solar Probe</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href = "#">
                                <span>
                                    Galleries
                                </span>
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