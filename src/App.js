import React, { Component } from "react";
import "./App.css";
import HomePage from "./homePage";
import ContactPage from "./contactPage";
import Sports from "./sports";


import { HashRouter as Router, Switch, Route } from "react-router-dom"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsJson: [],
    };
  }

  componentDidMount() {
    fetch("https://sdsportsapi.herokuapp.com/Sports", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ sportsJson: output }));

  }

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <Route
              exact
              path="/"
              render={() => {
                return <HomePage />;
              }}
            />
            <Switch>
              <Route path="/sports">
                <Sports data={this.state.sportsJson} />            
              </Route>
              <Route
              path="/contact"
              render={() => {
                return <ContactPage />;
              }}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
