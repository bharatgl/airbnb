import React from "react";

import logo from "../images/airbnb-logo-2020.svg";

function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="logo" />
    </nav>
  );
}

export default Navbar;
