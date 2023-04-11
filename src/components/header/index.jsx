import React from "react";

import './style.scss'

function Header(){

    return <header>
            <nav className="navbar">
        <div className="brand-logo">
        </div>
       
        <div className="navbar-links">
          <ul>
            <li><a href="#">Photo</a></li> 
            <li><a href="#">Videos</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
         </div>
      </nav>
    </header>
  }


export default Header