import React from "react";
import "./styles/Navaft.css";
import logo from "./logoi.png";
import { Link } from "react-router-dom";

function Navaft(){
    return(
        <div className="header">
          <nav>
            <a href="./index.html"><img src={ logo } className="logo1" /></a>
            <ul id="nav-item">
              <Link to='/'><li><a>Home</a></li></Link>
              <Link to='/buy'><li><a>Material</a></li></Link>
              <Link to='/sell'><li><a>Upload</a></li></Link>
              <Link to='/contact'><li><a>Contact</a></li></Link>
              <Link to='/account'><li><a>Account</a></li></Link>
            </ul>
          </nav>
        </div>
    )
}

export default Navaft;