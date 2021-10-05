import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return this.props.counters.map((c) => (
      <Counter
        key={c.id}
        counter={c}
        onIncrement={this.props.onIncrement}
        onDelete={this.props.onDelete}
      />
    ));
  }
}

export default Counters;
