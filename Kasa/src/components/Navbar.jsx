import React from 'react';
import "./Navbar.scss";
import  logo from "../assets/KasaLogo.png"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <nav className="navbar">
    <NavLink to = "/">
    <div className="navbar_logo">
      <img src={logo} alt="Photo logo"/>
    </div>
    </NavLink>
    
    <div className= "menu">
      <NavLink to ="/">
         
            Accueil
          
        </NavLink>

      <NavLink to ="/about">
        
          A propos
        
        </NavLink>
    </div>
  </nav>
  );
}

export default Navbar;