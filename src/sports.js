import React, { Component } from "react";
import "./sports.css";
import Nav from "./nav.js";
// import {Link} from "react-router-dom";


class Sports extends Component {
    constructor(props) {
        super();
        this.state = {
            sports: []
        }
    }


    render() {
        console.log(this.props.data);
        return (
            <div className="one">
                <Nav />
                <h1>MR. MILLER'S SPORTS CLUB</h1>
                <h5>**Spots are limited; First come first served**</h5>
                <h2>20 participants per class</h2>
                <h3>Available Sports</h3>

                <div className="sportInfo1">
                    {this.props.data.length !== 0
                        ? this.props.data.map((item) => (
                            <div class="info1">
                                <a><p class="sport">{item.sport}</p>
                                    <img src={item.image_url} />
                                    <p>{item.info}</p>
                                    <div className="location1">{item.location1.map(sport => (<div class="box1"> <p>Where: {sport.place}</p> <p>Age: {sport.ages} </p> <p>Days: {sport.days}</p> <p>Times: {sport.times}</p> <p><button onClick={() => alert("Your Entry Has Been Recorded.")}>Click to Schedule</button></p> </div>))} </div>
                                    <div className="location2">{item.location2.map(sport => (<div class="box2"> <p>Where: {sport.place}</p> <p>Age: {sport.ages} </p> <p>Days: {sport.days}</p><p>Times: {sport.times}</p> <p><button onClick={() => alert("Your Entry Has Been Recorded.")}>Click to Schedule</button></p> </div>))} </div>
                                </a>
                            </div>
                        ))
                        : null}
                </div>
            </div>
        );

    }
}


export default Sports;