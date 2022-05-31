import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

  hanldeIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button
          onClick={this.hanldeIncrement}
          className="btn btn-secondary btn-small m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-small"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
