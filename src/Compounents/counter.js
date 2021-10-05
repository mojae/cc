import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeFormat()}>{this.formatValue()}</span>

        <button className="btn secondary-btn " onClick={this.props.onIncrement}>
          increment
        </button>

        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeFormat() {
    let classes = "badge sm m-2 badge-";
    return (classes +=
      this.props.vinoiserie.value === 0 ? "warning" : "primary");
  }

  formatValue() {
    const { value } = this.props.vinoiserie;
    return value === 0 ? <h1>zero</h1> : value;
  }
}

export default Counter;
