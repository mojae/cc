import React from "react";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.min.css";

class Counters extends React.Component {
  render() {
    return this.props.counters.map((c) => (
      <Counter
        key={c.id}
        counter={c}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
        onDelete={this.props.onDelete}
      />
    ));
  }
}

export default Counters;
