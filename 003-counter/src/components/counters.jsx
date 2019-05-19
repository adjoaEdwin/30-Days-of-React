import React from "react";
import Counter from "../components/counter";

const Counters = ({ items, onIncrement, onDecrement, onDelete, onReset }) => {
  return (
    <React.Fragment>
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
      </div>
      <div>
        {items.map(item => {
          return (
            <Counter
              key={item.id}
              id={item.id}
              value={item.value}
              onIncrement={onIncrement}
              item={item}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Counters;
