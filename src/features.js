import React from "react";
import Card from "./Card";
import "./App.css";

export default class Features extends React.Component {
  render() {
    return (
      <div className="featuresContainer">
        <Card data={feature_1} />
        <Card data={feature_2} />
        <Card data={feature_3} />
      </div>
    );
  }
}
