import React, { Component } from "react";
import "./App.css";
import { items } from "./items";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    items: items
  };

  handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value--;
    this.setState({ items });
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(i => i.id !== itemId);
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
  };

  render() {
    const count = this.state.items.filter(i => i.value > 0).length;
    return (
      <React.Fragment>
        <NavBar count={count} />
        <Counters
          items={this.state.items}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
