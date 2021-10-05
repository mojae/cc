import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
  render() {
    const { onIncrement, onDelete, onDecrement, counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <h3>
            <span className={this.getBadgeFormat()}>{this.formatValue()}</span>
          </h3>
        </div>
        <div className="col">
          <button
            className="btn secondary-btn m-2 btn-secondary"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className="btn secondary-btn m-2 btn-secondary"
            onClick={() => onDecrement(counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn danger-btn m-2 btn-danger"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeFormat() {
    let classes = "badge lg m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatValue() {
    const { value } = this.props.counter;

    return value === 0 ? "zero" : value;
  }
}

export default Counter;
