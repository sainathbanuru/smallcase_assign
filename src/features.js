import React from "react";
import Card from "./Card";
import "./App.css";

export default class Features extends React.Component {
  render() {
    return (
      <div className="featuresContainer">
        <Card data={%_feature_1_%} />
        <Card data={%_feature_2_%} />
        <Card data={%_feature_3_%} />
      </div>
    );
  }
}
