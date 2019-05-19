import React, { Component } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPlus, faMinus);

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.getCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.item)}
            className="btn btn-secondary btn-sm m-2"
          >
            <FontAwesomeIcon icon="plus" />
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.item)}
            className="btn btn-secondary btn-sm m-2"
          >
            <FontAwesomeIcon icon="minus" />
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.item.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    return this.props.item.value === 0 ? "Zero" : this.props.item.value;
  }
}

export default Counter;
