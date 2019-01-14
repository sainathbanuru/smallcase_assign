import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./App.css";
import Card from "./Card";
import Features from "./features";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Features />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
