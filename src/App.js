import React from "react";
import "./App.css";
import Counters from "./Compounents/counters.js";

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

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <main className="container">
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </main>
    );
  }
}

export default App;
