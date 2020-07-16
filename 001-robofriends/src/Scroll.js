import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{ overflow: "scroll", border: "1px solid white", height: "800px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
