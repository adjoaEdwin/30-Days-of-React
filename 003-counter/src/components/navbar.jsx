import React from "react";

const NavBar = ({ count }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        NavBar
        <span className="btn btn-secondary btn-sm m-2">{count}</span>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
