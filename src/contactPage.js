import React, { Component } from "react";
import "./contactPage.css";
import Nav from "./nav.js";


class contactPage extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="contacts">
            <Nav /> 
            <h1 className= "contactMiller">Let's Get Connected!</h1>
                <div class="here">
                <input type="text" placeholder="Full name" name="fullName" required />
                <input type="text" placeholder="Phone Number" name="number" required />
                <input type="text" placeholder="Email address" name="mail" required />
                    <button onClick={() => alert("We will be in touch soon!")}> Click Here </button>
                </div>
            </div>
        )
    }
}
export default contactPage;
