import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <Introduction />
        <h1>Using React {this.props.name}</h1>
        <ul>
          <li>React</li>
          <li>First react app</li>
          <li>tic-tac-toe game</li>
        </ul>
      </div>
    );
  }
}

export default Introduction;
