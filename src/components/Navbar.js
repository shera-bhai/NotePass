import React from "react";
import "./styles/Navbar.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="header">
          <nav>
            <a href="./index.html"><img src={ logo } className="logo" /></a>
            <ul id="nav-item">
              <Link to='/'><li><a>Home</a></li></Link>
              <Link to='/buy'><li><a>Buy Books</a></li></Link>
              <Link to='/sell'><li><a>Sell Books</a></li></Link>
              <Link to='/contact'><li><a>Contact</a></li></Link>
              <Link to='/login'><li><a>Login</a></li></Link>
            </ul>
          </nav>
        </div>
    )
}

export default Navbar;