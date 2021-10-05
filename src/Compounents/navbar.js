import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className={"navbar navbar-light bg-light"}>
        <a className={"navbar-brand"} href="#">
          Number of counters
          <span className={"badge badge-pill badge-secondary"}>
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
