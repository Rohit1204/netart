import React from 'react';
import logo from "../../logo.png";
import "./navbar.style.css";
import * as Icon from 'react-feather';

export const Navbar =()=>{
    return(
        <div className="navbar">
           <img
           alt='C.R.I'
           src={logo}
        />
        <div className="navbar-right">
        <a href='https://github.com/rohit1204' target='__blank' className='github'><Icon.GitHub color={"#000000"}/> </a>
        </div>
          </div>         
    )
}
