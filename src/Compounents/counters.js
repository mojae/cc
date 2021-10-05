import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    vinoiserie: [
      { id: 1, name: "croissant", value: 4 },
      { id: 2, name: "Chocolatine", value: 0 },
      { id: 3, name: "Tarte aux amandes", value: 0 },
    ],
  };

  Reset = () => {
    const vinoiseries = this.state.vinoiserie.map((v) => {
      v.value = 0;
      return v;
    });
    this.setState({ vinoiserie: vinoiseries });
  };

  handleIncrement = (v) => {
    const vinoiseries = [...this.state.vinoiserie];
    let index = this.state.vinoiserie.indexOf(v);
    vinoiseries[index] = { ...v };
    vinoiseries[index].value++;
    this.setState({ vinoiserie: vinoiseries });
  };
  handleDelete = (id) => {
    const vinoiserie = this.state.vinoiserie.filter((v) => id !== v.id);
    this.setState({ vinoiserie });
  };
  render() {
    console.log(this.state.vinoiserie.length);

    return (
      <div>
        <button className={"btn btn-primary m-2"} onClick={this.Reset}>
          Reset
        </button>
        {this.state.vinoiserie.map((v) => (
          <Counter
            onDelete={() => this.handleDelete(v.id)}
            key={v.id}
            vinoiserie={v}
            onIncrement={() => this.handleIncrement(v)}
          >
            {v.name}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
