import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./nav.css";

function Nav() { 
    return (
        <div>
        <nav className="header">
          <div className="tabs">
         <Link to= "/">     
          <a className="tab">
                Home
           </a>
           </Link>
           <Link to= "/sports"> 
            <a className="tab">
                Sports
           </a>
           </Link>
            <Link to= "/contact"> 
            <a className="tab">
               Contact
            </a>
            </Link>
           </div> 
      </nav>
      </div>
    );
  }
  
  export default Nav;
  