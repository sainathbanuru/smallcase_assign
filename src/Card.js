import React from "react";
import "./App.css";

export default class Card extends React.Component {
  render() {
    return <div className="cardContainer">{this.props.data}</div>;
  }
}
