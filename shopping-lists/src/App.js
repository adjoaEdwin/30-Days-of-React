import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ProductList from "./screens/ProductList";
import AddProduct from "./screens/AddProduct";
import { items } from "./items";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: items
    };

    // this.onProductPress = this.onProductPress.bind(this);
  }

  onProductPress = item => {
    this.state.items.forEach(i => {
      if (i.id === item.id) {
        i.checked = !item.checked;
      }
      return i;
    });
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <Router>
        <div className="ui container">
          <ul className="ui inverted menu">
            <li className="active item">
              <Link to="/">Product Lists</Link>
            </li>
            <li className="item">
              <Link to="/add-product">Add a product</Link>
            </li>
          </ul>
          <Route
            exact
            path="/"
            component={() => (
              <ProductList
                items={this.state.items}
                item={this.state.item}
                productPress={this.onProductPress}
                // checked={this.state.items.checked}
              />
            )}
          />
          <Route exact path="/add-product" component={AddProduct} />
        </div>
      </Router>
    );
  }
}

export default App;
