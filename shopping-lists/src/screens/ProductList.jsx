import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct() {
    console.log("added");
  }

  removeProduct() {
    console.log("removed");
  }
  render() {
    const { items, productPress } = this.props;
    return (
      <div>
        <h1 className="ui center aligned dividing header">My Shopping List</h1>
        {items.map(item => (
          <Product
            key={item.name}
            name={item.name}
            id={item.id}
            productPress={productPress}
            checked={item.checked}
            item={item}
          />
        ))}
        <div className="ui middle aligned divided list">
          <div className="item">
            <div className="right floated content">
              <button
                className="ui negative basic button"
                onClick={this.removeProduct}
              >
                <i className="minus circle icon" />
                Remove an item
              </button>
            </div>
            <button
              className="ui primary basic button"
              onClick={this.addProduct}
            >
              <i className="plus circle icon" />
              Add item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
