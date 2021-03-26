import React, { Component } from "react";
import "./App.css";
import HomePage from "./homePage";
import ContactPage from "./contactPage";
import Sports from "./sports";


import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsJson: [],
    };
  }

  componentDidMount() {
    fetch("www.http://localhost:8000/Sports/", {
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
          <BrowserRouter>
            <Route
              exact
              path="/"
              render={() => {
                return <HomePage />;
              }}
            />
            <Switch>
              <Route exact path="/Sports">
                <Sports data={this.state.sportsJson} />
              </Route>
              <Route exact path="/add">
            
              </Route>
              <Route
              exact
              path="/contact"
              render={() => {
                return <ContactPage />;
              }}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
