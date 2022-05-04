/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Foot.scss";
import NASA from "../../Assets/nasa-logo.svg";

export default function Carrier() {
  return (
    <div className="foot">
      <div className="Nasa-info">
        <a href="#">
          <img src={NASA} alt="NASA" />
        </a>
        <span>National Aeronautics and Space Administration</span>
        <span>NASA Official: Brian Dunbar</span>
      </div>
      <a href="#">hola</a>
      <ul className="Nasa-links">
        <li><a href="https://www.nasa.gov/offices/odeo/no-fear-act">No Fear Act</a></li>
        <li><a href="https://www.nasa.gov/FOIA">FOIA</a></li>
        <li><a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">Privacy</a></li>
        <li><a href="https://oig.nasa.gov/">Office of Inspector General</a></li>
        <li><a href="https://osc.gov/">Office of Special Counsel</a></li>
        <li><a href="https://www.nasa.gov/content/agency-financial-reports">Agency Financial Reports</a></li>
        <li><a href="https://www.nasa.gov/about/contact/index.html">Contact NASA</a></li>
      </ul>
    </div>
  );
}
