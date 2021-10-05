import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeFormat()}>{this.formatValue()}</span>
        <button
          className="btn secondary-btn "
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          increment
        </button>
        <button
          className="btn danger-btn "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeFormat() {
    let classes = "badge sm m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>zero</h1> : value;
  }
}

export default Counter;
