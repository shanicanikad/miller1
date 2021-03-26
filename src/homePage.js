import React from "react";
// import { Link, Route, Switch, Redirect } from "react-router-dom";
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
          <a href="/sports" className="link">
            Sports
           </a>
          <a href="/contact" className="link">
            Contact
            </a>
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
