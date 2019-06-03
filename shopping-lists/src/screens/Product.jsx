import React from "react";

const Product = ({ name, checked, item, productPress }) => {
  return (
    <div>
      <div className="ui middle aligned divided list">
        <div className="item">
          <div className="right floated content">
            <input
              type="checkbox"
              name="radio"
              checked={checked}
              onChange={() => productPress(item)}
            />
          </div>
          <div
            className="content"
            style={{ color: item.checked ? "#bbb" : "#000" }}
          >
            {name}
          </div>
        </div>
      </div>
      <div className="ui divider" />
    </div>
  );
};

export default Product;
