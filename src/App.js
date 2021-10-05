import React from "react";
import "./App.css";
import Counters from "./Compounents/counters.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Compounents/navbar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters: counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
  reSet = () => {
    const countersCopy = [...this.state.counters];
    countersCopy.map((c) => {
      c.value = 0;
    });
    this.setState({ counters: countersCopy });
  };
  render() {
    return (
      <main className="container">
        <NavBar
          totalCounters={
            this.state.counters.filter((c) => c.value !== 0).length
          }
        />
        <button className={"btn-primary m-2 btn"} onClick={this.reSet}>
          Reset
        </button>
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </main>
    );
  }
}

export default App;
