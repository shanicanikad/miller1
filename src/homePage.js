import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import pic1 from "../src/Images/kickball.jpg";
import pic2 from "../src/Images/hurdles.jpg";
import Subscribe from "./subscribe";

function HomePage() {
  return (
    <div className="app">
      <div className="header">
        <h4>MR. MILLER'S SPORTS CLUB</h4>
      </div>
      <div className="container">
        <h1 className="headline">Welcome to Mr. Miller's Sports Club! Let's Get Healthy Together!</h1>
        <div className="links">
          <Link to= "/sports" className="link">
            Sports
           </Link>
          <Link to="/contact" className="link">
            Contact
            </Link>
        </div>

        
        <h2 className="multi">Multi-Sport</h2>
        <img src={pic1} className="sportsPic" />
        
        <h2 className="multi">Kid Fitness</h2>
        <img src={pic2} className="sportsPic" />
      
      
        <Subscribe/>
      </div>
      <footer className="name">Shanica Denis ©2020</footer>
    </div>
  );
}

export default HomePage;
